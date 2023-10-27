import { useQuery } from "@tanstack/react-query";

import { APP_CONSTANTS } from "@/constants";
import { getCategories } from "@/services";

export default function useCategories() {
  const { data: categories } = useQuery({
    queryKey: [APP_CONSTANTS.QUERY_KEYS.CUSTOMER.CATEGORIES],
    queryFn: getCategories,
    staleTime: Infinity,
  });

  return categories;
}
