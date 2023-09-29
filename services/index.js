import axiosClient from "@/libs/axiosClient";
import { URL_CONSTANTS } from "@/constants";

import Cookies from "js-cookie";

const token = Cookies.get("token");

export async function getUser(token) {
  try {
    const response = await axiosClient.get(URL_CONSTANTS.GET_USER, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response?.data?.data;
  } catch (error) {
    return error?.response?.data?.msg;
  }
}

export async function getCategories() {
  try {
    const {
      data: { data },
    } = await axiosClient.get(URL_CONSTANTS.CUSTOMER.GET_CATEGORIES, {
      params: { type: "active" },
    });

    return data;
  } catch (error) {
    return error;
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

    return data;
  } catch (error) {
    return error;
  }
}

export async function getSubCategoriesWithCategoryId({ queryKey }) {
  try {
    const categoryId = queryKey[1];
    const {
      data: { data },
    } = await axiosClient.get(
      URL_CONSTANTS.CUSTOMER.GET_SUB_CATEGORIES_WITH_CATEGORY_ID,
      {
        params: {
          category_id: categoryId,
        },
      }
    );

    return data;
  } catch (error) {
    return error;
  }
}

export async function getReviewsByBusinessId(skip, businessId, userId) {
  try {
    const SKIP = skip;
    const LIMIT = 5;

    const {
      data: { data },
    } = await axiosClient.get(
      `${URL_CONSTANTS.CUSTOMER.REVIEWS.GET_REVIEWS_BY_BUSINESS_ID}/${SKIP}/${LIMIT}`,
      {
        params: {
          businessId,
          userId,
        },
      }
    );

    return data;
  } catch (error) {
    return error;
  }
}

export async function getAverageBusinessRating(businessId) {
  try {
    const {
      data: { data },
    } = await axiosClient.get(
      `${URL_CONSTANTS.CUSTOMER.REVIEWS.GET_AVERAGE_BUSINESS_RATING}/${businessId}`
    );

    return data;
  } catch (error) {
    return error;
  }
}

export async function getServicesByBusiness(businessId) {
  try {
    const {
      data: { data },
    } = await axiosClient.get(
      `${URL_CONSTANTS.BUSINESS.SERVICES.GET_SERVICES_BY_BUSINESS}/${businessId}`
    );

    return data;
  } catch (error) {
    return error;
  }
}

export async function getStates() {
  try {
    const {
      data: { data },
    } = await axiosClient.get(URL_CONSTANTS.BUSINESS.STATES);

    return data;
  } catch (error) {
    return error;
  }
}
