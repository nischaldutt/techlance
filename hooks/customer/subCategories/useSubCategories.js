import { useQuery } from "@tanstack/react-query";

import { APP_CONSTANTS } from "@/constants";

import { getSubCategories } from "@/services/customerServices";

// todo: enable paginated/infinite queries here
export default function useSubCategories() {
  const {
    data: {
      data: { data: subCategories },
    },
  } = useQuery({
    queryKey: [APP_CONSTANTS.QUERY_KEYS.CUSTOMER.SUB_CATEGORIES],
    queryFn: getSubCategories,
    staleTime: Infinity,
    // keepPreviousData: true
  });

  return { subCategories };
}
