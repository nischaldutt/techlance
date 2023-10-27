import { useQuery } from "@tanstack/react-query";

import { APP_CONSTANTS } from "@/constants";
import { getStates } from "@/services";

export default function useStates() {
  const { data: states, isFetching } = useQuery({
    queryKey: [APP_CONSTANTS.QUERY_KEYS.BUSINESS.STATES],
    queryFn: getStates,
    staleTime: Infinity,
  });

  return { states, isFetching };
}
