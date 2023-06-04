import { useQuery } from "@tanstack/react-query";

import { APP_CONSTANTS } from "@/constants";

import { getSubCategoriesWithCategoryId } from "@/services/customerServices";

export default function useSubCategoriesWithCategoryId(categoryId) {
  const {
    data: response,
    isSuccess,
    isError,
    isFetching,
  } = useQuery({
    queryKey: [
      APP_CONSTANTS.QUERY_KEYS.SUB_CATEGORIES_WITH_CATEGORY_ID,
      categoryId,
    ],
    queryFn: getSubCategoriesWithCategoryId,
    staleTime: Infinity,
    enabled: !!categoryId,
  });

  if (isSuccess) {
    const {
      data: { data: subCategoriesWithCategoryId },
    } = response;
    return {
      subCategoriesWithCategoryId,
      isSuccess,
      isFetching,
    };
  }

  return { isFetching, isError };
}
