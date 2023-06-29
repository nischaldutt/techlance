import { useMutation } from "@tanstack/react-query";

import axiosClient from "@/libs/axiosClient";
import { APP_CONSTANTS, URL_CONSTANTS } from "@/constants";

export default function useSignup(callback) {
  const { mutate, isLoading } = useMutation({
    mutationFn: (userObj) => {
      const { user_type, firstName, lastName, email, mobile, password } =
        userObj;
      const reqBody = {
        user_type: user_type,
        first_name: firstName,
        last_name: lastName,
        email: email,
        mobile_no: parseInt(mobile),
        password: password,
        country_id: 1,
        is_mobile_verified: 1,
        is_email_verified: 1,
      };

      const signupEndpoint =
        userObj?.user_type === APP_CONSTANTS.USER_TYPE.CUSTOMER
          ? URL_CONSTANTS.CUSTOMER.AUTH.SIGN_UP
          : URL_CONSTANTS.BUSINESS.AUTH.SIGN_UP;

      return axiosClient.post(signupEndpoint, reqBody);
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
