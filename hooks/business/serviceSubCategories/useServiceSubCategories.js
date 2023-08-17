import { useQuery } from "@tanstack/react-query";

import { APP_CONSTANTS } from "@/constants";
import { getSubCategoriesWithCategoryId } from "@/services";

export default function useServiceSubCategories(categoryId) {
  const {
    data: subCategories,
    isSuccess,
    isError,
    isFetching,
  } = useQuery({
    queryKey: [
      APP_CONSTANTS.QUERY_KEYS.BUSINESS.SERVICE_SUB_CATEGORIES,
      categoryId,
    ],
    queryFn: getSubCategoriesWithCategoryId,
    staleTime: Infinity,
    enabled: !!categoryId,
  });

  if (isSuccess) {
    return {
      subCategories,
      isSuccess,
      isFetching,
    };
  }

  return { isFetching, isError };
}
