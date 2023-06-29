import { useQuery, useInfiniteQuery } from "@tanstack/react-query";

import { APP_CONSTANTS } from "@/constants";
import { getReviewsByBusinessId } from "@/services/customerServices";

export default function useReviewsByBusinessId(businessId) {
  // const { data, isFetching } = useQuery({
  //   queryKey: [
  //     APP_CONSTANTS.QUERY_KEYS.CUSTOMER.REVIEWS.GET_REVIEWS_BY_BUSINESS_ID,
  //     businessId,
  //   ],
  //   queryFn: () => getReviewsByBusinessId(businessId),
  // });

  const {
    isLoading,
    data,
    isError,
    error,
    hasNextPage,
    isFetching,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: [
      APP_CONSTANTS.QUERY_KEYS.CUSTOMER.REVIEWS.GET_REVIEWS_BY_BUSINESS_ID,
      businessId,
    ],
    queryFn: ({ pageParam = 1 }) => getReviewsByBusinessId(businessId),
    getNextPageParam: (_lastPage, pages) => {
      return pages.length < 5 ? pages.length + 1 : undefined;
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
  };
}
