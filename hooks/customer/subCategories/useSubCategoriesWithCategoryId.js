import { useQuery } from "@tanstack/react-query";

import { APP_CONSTANTS } from "@/constants";

import { getSubCategoriesWithCategoryId } from "@/services";

export default function useSubCategoriesWithCategoryId(categoryId) {
  const {
    data: subCategoriesWithCategoryId,
    isSuccess,
    isError,
    isFetching,
  } = useQuery({
    queryKey: [
      APP_CONSTANTS.QUERY_KEYS.CUSTOMER.SUB_CATEGORIES_WITH_CATEGORY_ID,
      categoryId,
    ],
    queryFn: getSubCategoriesWithCategoryId,
    staleTime: Infinity,
    enabled: !!categoryId,
  });

  if (isSuccess) {
    return {
      subCategoriesWithCategoryId,
      isSuccess,
      isFetching,
    };
  }

  return { isFetching, isError };
}
