import { useMutation } from "@tanstack/react-query";

import axiosClient from "@/libs/axiosClient";
import { URL_CONSTANTS } from "@/constants";

export default function useCreateService(callback) {
  const { mutate: createService, isLoading } = useMutation({
    mutationFn: (reqBody) => {
      return axiosClient.post(
        URL_CONSTANTS.BUSINESS.SERVICES.CREATE_SERVICE,
        reqBody
      );
    },
    onSuccess: (data) => {
      callback(true, data?.data?.message);
    },
    onError: (error) => {
      callback(false, error?.response?.data?.message);
    },
  });

  return { createService, isLoading };
}
