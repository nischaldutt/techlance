import { useMutation } from "@tanstack/react-query";

import { postRequest } from "@/services";
import { URL_CONSTANTS } from "@/constants";

export default function useSignup(callback) {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: (reqBody) => {
      return postRequest(URL_CONSTANTS.AUTH.SIGN_UP, reqBody);
    },
    onSuccess: (response) => {
      callback(true, response?.message);
    },
    onError: (error) => {
      callback(false, error?.payload?.message);
    },
  });

  return { signup, isLoading };
}
