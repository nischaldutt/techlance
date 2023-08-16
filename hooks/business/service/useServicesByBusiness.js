import { useQuery } from "@tanstack/react-query";

import { APP_CONSTANTS } from "@/constants";
import { getServicesByBusiness } from "@/services";

export default function useServicesByBusiness(businessId) {
  const {
    data: services,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: [
      APP_CONSTANTS.QUERY_KEYS.BUSINESS.SERVICES_BY_BUSINESS,
      businessId,
    ],
    queryFn: () => getServicesByBusiness(businessId),
    enabled: !!businessId,
  });

  return { services, isFetching, refetch };
}
