import { useQuery } from "@tanstack/react-query";

import { APP_CONSTANTS } from "@/constants";
import { getReviewsByBusinessId } from "@/services/customerServices";

export default function useReviewsByBusinessId(businessId) {
  const { data, isFetching } = useQuery({
    queryKey: [
      APP_CONSTANTS.QUERY_KEYS.CUSTOMER.REVIEWS.GET_REVIEWS_BY_BUSINESS_ID,
      businessId,
    ],
    queryFn: () => getReviewsByBusinessId(businessId),
  });

  return { isFetching, businessReviews: data?.data?.data || [] };
}
