import { useMutation } from "@tanstack/react-query";

import axiosClient from "@/utils/axiosClient";
import { APP_CONSTANTS, URL_CONSTANTS } from "@/constants";

export default function useBusinessBasicInfo(callback) {
  const { mutate, isLoading } = useMutation({
    mutationFn: (basicInfo) => {
      return axiosClient.post(
        URL_CONSTANTS.BUSINESS.REGISTRATION.ADD_BASIC_INFO,
        basicInfo
      );
    },
    onSuccess: (data) => {
      console.log({ data });
      callback(true, data?.message);
    },
    onError: (error) => {
      console.log({ error });
      callback(false, error?.response?.data?.message);
    },
  });

  return { mutate, isLoading };
}
