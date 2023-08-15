import { useQuery, useInfiniteQuery } from "@tanstack/react-query";

import { APP_CONSTANTS } from "@/constants";
import { getReviewsByBusinessId } from "@/services/customerServices";

export default function useReviewsByBusinessId(businessId, userId) {
  const {
    isLoading,
    data,
    isError,
    error,
    hasNextPage,
    isFetching,
    fetchNextPage,
    isFetchingNextPage,
    refetch,
  } = useInfiniteQuery({
    queryKey: [
      APP_CONSTANTS.QUERY_KEYS.CUSTOMER.REVIEWS.GET_REVIEWS_BY_BUSINESS_ID,
      businessId,
      userId,
    ],
    queryFn: ({ pageParam = 0 }) =>
      getReviewsByBusinessId(pageParam, businessId, userId),
    getNextPageParam: (_lastPage, pages) => {
      return _lastPage?.data?.data?.reviews?.length < 5
        ? undefined
        : pages.reduce(
            (acc, group) => acc + group?.data?.data?.reviews?.length,
            0
          );
    },
  });

  return {
    businessReviews: data?.pages || [],
    isLoading,
    data,
    isError,
    error,
    hasNextPage,
    isFetching,
    fetchNextPage,
    isFetchingNextPage,
    refetch,
  };
}
