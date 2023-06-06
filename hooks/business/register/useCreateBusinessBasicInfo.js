import { useMutation, useQueryClient } from "@tanstack/react-query";

import axiosClient from "@/libs/axiosClient";
import { APP_CONSTANTS, URL_CONSTANTS } from "@/constants";

export default function useCreateBusinessBasicInfo(callback) {
  const queryClient = useQueryClient();

  const { mutate: createBusiness, isLoading } = useMutation({
    mutationFn: (basicInfo) => {
      return axiosClient.post(
        URL_CONSTANTS.BUSINESS.REGISTRATION.ADD_BASIC_INFO,
        basicInfo
      );
    },
    onSuccess: (res) => {
      queryClient.setQueryData(
        [
          APP_CONSTANTS.QUERY_KEYS.BUSINESS.BUSINESS_REGISTRATION
            .ADD_BASIC_INFO,
        ],
        (prevData) => {
          const {
            data: { data: cachedBasicInfoData },
          } = res;
          return cachedBasicInfoData;
        }
      );

      callback(true, res?.data);
    },
    onError: (error) => {
      callback(false, error?.response?.data?.message);
    },
  });

  return { createBusiness, isLoading };
}
