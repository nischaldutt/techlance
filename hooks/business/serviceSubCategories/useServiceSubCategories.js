import { useQuery } from "@tanstack/react-query";

import { APP_CONSTANTS } from "@/constants";
import { getSubCategoriesWithCategoryId } from "@/services";

export default function useServiceSubCategories(categoryId) {
  const {
    data: response,
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
    const {
      data: { data: subCategories },
    } = response;
    return {
      subCategories,
      isSuccess,
      isFetching,
    };
  }

  return { isFetching, isError };
}
