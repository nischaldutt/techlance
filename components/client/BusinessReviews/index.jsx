import { useState, useEffect } from "react";
import { Divider, Rate, Spin } from "antd";

import { useAuthContext } from "@/contexts";
import { useReviewsByBusinessId } from "@/hooks";

import ReviewList from "@/components/client/BusinessReviews/ReviewList";
import CreateReviewForm from "@/components/client/BusinessReviews/CreateReviewForm";

export default function BusinessReviews({ businessId, rating }) {
  // todo: integrate average rating endpoint
  const { isAuthenticated, user } = useAuthContext();
  const {
    businessReviews,
    isLoading,
    data,
    isError,
    error,
    hasNextPage,
    isFetching,
    fetchNextPage,
    isFetchingNextPage,
    refetch,
  } = useReviewsByBusinessId(businessId, user?.id);

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setReviews(businessReviews);
  }, [businessReviews]);

  console.log({ reviews });
  return (
    <div className="py-4 text-gray-700">
      <div className="uppercase pt-6 py-3 underline-offset-8 font-bold">
        Ratings
      </div>

      <div className="flex gap-4 items-center">
        <h4 className="text-4xl font-bold">4.5</h4>
        <Rate className="text-2xl" count={1} value={rating} />
      </div>

      <Divider />

      <Spin spinning={isFetching}>
        <ReviewList
          reviews={reviews}
          hasNextPage={hasNextPage}
          fetchNextPage={fetchNextPage}
          isFetchingNextPage={isFetchingNextPage}
          refetch={refetch}
        />
      </Spin>

      <Divider />

      {isAuthenticated &&
        reviews?.[0]?.data?.data?.reviews?.[0]?.userId !== user?.id && (
          <CreateReviewForm businessId={businessId} refetch={refetch} />
        )}
    </div>
  );
}
