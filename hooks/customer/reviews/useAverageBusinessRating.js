import { useQuery } from "@tanstack/react-query";

import { APP_CONSTANTS } from "@/constants";
import { getAverageBusinessRating } from "@/services/customerServices";

export default function useAverageBusinessRating(businessId) {
  const { data: averageRating } = useQuery({
    queryKey: [
      APP_CONSTANTS.QUERY_KEYS.CUSTOMER.REVIEWS.GET_AVERAGE_BUSINESS_RATING,
      businessId,
    ],
    queryFn: () => getAverageBusinessRating(businessId),
    staleTime: Infinity,
    enabled: !!businessId,
  });

  return averageRating;
}
