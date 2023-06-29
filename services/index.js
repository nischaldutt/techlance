import axiosClient from "@/libs/axiosClient";
import { URL_CONSTANTS } from "@/constants";

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
