import axiosClient from "@/libs/axiosClient";
import { URL_CONSTANTS } from "@/constants";

export async function getCategories() {
  try {
    const {
      data: { data },
    } = await axiosClient.get(URL_CONSTANTS.CUSTOMER.GET_CATEGORIES, {
      params: { type: "active" },
    });

    return { data };
  } catch (error) {
    return { error };
  }
}

export async function getSubCategories() {
  try {
    const {
      data: { data },
    } = await axiosClient.get(URL_CONSTANTS.CUSTOMER.GET_ALL_SUB_CATEGORIES, {
      params: {
        skip: 0,
        limit: 10,
      },
    });

    return { data };
  } catch (error) {
    return { error };
  }
}

export async function getSubCategoriesWithCategoryId({ queryKey }) {
  try {
    const categoryId = queryKey[1];
    const { data } = await axiosClient.get(
      URL_CONSTANTS.CUSTOMER.GET_SUB_CATEGORIES_WITH_CATEGORY_ID,
      {
        params: {
          category_id: categoryId,
        },
      }
    );

    return { data };
  } catch (error) {
    return { error };
  }
}

export async function getReviewsByBusinessId(skip, businessId, userId) {
  try {
    const SKIP = skip;
    const LIMIT = 5;

    const { data: data } = await axiosClient.get(
      `${URL_CONSTANTS.CUSTOMER.REVIEWS.GET_REVIEWS_BY_BUSINESS_ID}/${SKIP}/${LIMIT}`,
      {
        params: {
          businessId,
          userId,
        },
      }
    );

    return { data };
  } catch (error) {
    return { error };
  }
}
