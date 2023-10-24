import { Divider, Rate, Spin } from "antd";

import { useAuthContext } from "@/contexts";
import { useReviewsByBusinessId } from "@/hooks";

import ReviewList from "@/components/client/BusinessReviews/ReviewList";
import CreateReviewForm from "@/components/client/BusinessReviews/CreateReviewForm";

export default function BusinessReviews({ businessId, rating }) {
  const { isAuthenticated, user } = useAuthContext();
  const {
    businessReviews,
    isLoading,
    isError,
    error,
    hasNextPage,
    isFetching,
    fetchNextPage,
    isFetchingNextPage,
    refetch,
  } = useReviewsByBusinessId(businessId);

  return (
    <div className="py-4 text-gray-700">
      <div className="uppercase pt-6 py-3 underline-offset-8 font-bold">
        Ratings
      </div>

      {rating ? (
        <div className="flex gap-4 items-center">
          <h4 className="text-4xl font-bold">
            {Number.parseFloat(rating).toFixed(1)}
          </h4>
          <Rate className="text-2xl" count={1} value={rating} />
        </div>
      ) : null}

      <Divider />

      <Spin spinning={isFetching}>
        <ReviewList
          reviewGroups={businessReviews}
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
          isFetchingNextPage={isFetchingNextPage}
          refetch={refetch}
        />
      </Spin>

      <Divider />

      {isAuthenticated &&
        businessReviews?.[0]?.reviews?.[0]?.userId !== user?.id && (
          <CreateReviewForm businessId={businessId} refetch={refetch} />
        )}
    </div>
  );
}
