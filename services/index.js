import axiosClient from "@/libs/axiosClient";
import { URL_CONSTANTS } from "@/constants";

export async function getRequest(url, config = {}) {
  try {
    const { data } = await axiosClient.get(url, config);
    return {
      status: data?.status, // todo_: ask to fix spelling @ src/services/UserService.ts stauts
      message: data?.message,
      payload: data?.data || null,
    };
  } catch (error) {
    throw {
      status: error?.response?.status,
      message: error?.response?.statusText,
      payload: error?.response?.data || null,
    };
  }
}

export async function postRequest(url, payload = {}, config = {}) {
  try {
    const { data } = await axiosClient.post(url, payload, config);
    return {
      status: data?.status,
      message: data?.message,
      payload: data?.data || null,
    };
  } catch (error) {
    throw {
      status: error?.response?.status,
      message: error?.response?.statusText,
      payload: error?.response?.data || null,
    };
  }
}

export async function putRequest(url, payload = {}, config = {}) {
  try {
    const { data } = await axiosClient.put(url, payload, config);
    return {
      status: data?.status,
      message: data?.message,
      payload: data?.data || null,
    };
  } catch (error) {
    throw {
      status: error?.response?.status,
      message: error?.response?.statusText,
      payload: error?.response?.data || null,
    };
  }
}

export async function deleteRequest(url, payload = {}, config = {}) {
  try {
    const { data } = await axiosClient.delete(url, {
      ...config,
      data: payload,
    });
    return {
      status: data?.status,
      message: data?.message,
      payload: data?.data || null,
    };
  } catch (error) {
    throw {
      status: error?.response?.status,
      message: error?.response?.statusText,
      payload: error?.response?.data || null,
    };
  }
}

export async function getUser(token) {
  if (!token) return null;
  try {
    const { payload } = await getRequest(URL_CONSTANTS.GET_USER, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return payload;
  } catch (error) {
    throw error?.payload;
  }
}

export async function getCategories() {
  try {
    const { payload } = await getRequest(
      URL_CONSTANTS.CUSTOMER.GET_CATEGORIES,
      { params: { type: "active" } }
    );
    return payload;
  } catch (error) {
    throw error?.payload;
  }
}

export async function getSubCategories() {
  try {
    const { payload } = await getRequest(
      URL_CONSTANTS.CUSTOMER.GET_ALL_SUB_CATEGORIES,
      { params: { skip: 0, limit: 10 } }
    );
    return payload;
  } catch (error) {
    throw error?.payload;
  }
}

export async function getSubCategoriesWithCategoryId({ queryKey }) {
  try {
    const categoryId = queryKey[1];
    const { payload } = await getRequest(
      URL_CONSTANTS.CUSTOMER.GET_SUB_CATEGORIES_WITH_CATEGORY_ID,
      { params: { category_id: categoryId } }
    );
    return payload;
  } catch (error) {
    throw error?.payload;
  }
}

export async function getReviewsByBusinessId(skip, businessId) {
  try {
    const SKIP = skip;
    const LIMIT = 5;

    const { payload } = await getRequest(
      `${URL_CONSTANTS.CUSTOMER.REVIEWS.GET_REVIEWS_BY_BUSINESS_ID}/${SKIP}/${LIMIT}`,
      { params: { businessId } }
    );
    return payload;
  } catch (error) {
    throw error?.payload;
  }
}

export async function getAverageBusinessRating(businessId) {
  try {
    const { payload } = await getRequest(
      `${URL_CONSTANTS.CUSTOMER.REVIEWS.GET_AVERAGE_BUSINESS_RATING}/${businessId}`
    );
    return payload;
  } catch (error) {
    throw error?.payload;
  }
}

export async function getServicesByBusiness(businessId) {
  try {
    const { payload } = await getRequest(
      `${URL_CONSTANTS.BUSINESS.SERVICES.GET_SERVICES_BY_BUSINESS}/${businessId}`
    );
    return payload;
  } catch (error) {
    throw error?.payload;
  }
}

export async function getStates() {
  try {
    const { payload } = await getRequest(URL_CONSTANTS.BUSINESS.STATES);
    return payload;
  } catch (error) {
    throw error?.payload;
  }
}

export async function deleteFile({ fileId, fileName }) {
  try {
    const { payload } = await deleteRequest(URL_CONSTANTS.SINGLE_FILE_DELETE, {
      fileId,
      fileName,
    });
    return payload;
  } catch (error) {
    throw error?.payload;
  }
}
