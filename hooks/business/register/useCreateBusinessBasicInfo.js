import { useMutation } from "@tanstack/react-query";

import axiosClient from "@/libs/axiosClient";
import { useQueryCacheContext } from "@/contexts";
import { APP_CONSTANTS, URL_CONSTANTS } from "@/constants";

export default function useCreateBusinessBasicInfo(callback) {
  const { saveQueryToCache } = useQueryCacheContext();

  const { mutate: createBusiness, isLoading } = useMutation({
    mutationFn: (basicInfo) => {
      return basicInfo?.businessId
        ? axiosClient.put(
            URL_CONSTANTS.BUSINESS.REGISTRATION.ADD_BASIC_INFO,
            basicInfo
          )
        : axiosClient.post(
            URL_CONSTANTS.BUSINESS.REGISTRATION.ADD_BASIC_INFO,
            basicInfo
          );
    },
    onSuccess: (res) => {
      saveQueryToCache(
        [
          APP_CONSTANTS.QUERY_KEYS.BUSINESS.BUSINESS_REGISTRATION
            .ADD_BASIC_INFO,
        ],
        res?.data?.data
      );

      callback(true, res?.data);
    },
    onError: (error) => {
      callback(false, error?.response?.data?.message);
    },
  });

  return { createBusiness, isLoading };
}
