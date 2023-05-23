import { useMutation } from "@tanstack/react-query";

import axiosClient from "@/utils/axiosClient";
import { URL_CONSTANTS } from "@/constants";

export default function useSignup(callback) {
  const { mutate, isLoading } = useMutation({
    mutationFn: (userObj) => {
      return axiosClient.post(URL_CONSTANTS.AUTH.SIGN_UP, userObj);
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
