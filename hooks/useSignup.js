import { useMutation } from "@tanstack/react-query";

import axiosClient from "@/utils/axiosClient";
import { APP_CONSTANTS, URL_CONSTANTS } from "@/constants";

export default function useSignup(callback) {
  const { mutate, isLoading } = useMutation({
    mutationFn: (userObj) => {
      const signupEndpoint =
        userObj?.user_type === APP_CONSTANTS.USER_TYPE.CUSTOMER
          ? URL_CONSTANTS.CUSTOMER.AUTH.SIGN_UP
          : URL_CONSTANTS.BUSINESS.AUTH.SIGN_UP;

      return axiosClient.post(signupEndpoint, userObj);
    },
    onSuccess: (data) => {
      callback(true, data?.message);
    },
    onError: (error) => {
      callback(false, error?.response?.data?.message);
    },
  });

  return { mutate, isLoading };
}
