import { useMutation } from "@tanstack/react-query";

import axiosClient from "@/libs/axiosClient";
import { useQueryCacheContext } from "@/contexts";
import { APP_CONSTANTS, URL_CONSTANTS } from "@/constants";

export default function useCreateBusinessInsurance(callback) {
  const { getQueryFromCache, saveQueryToCache } = useQueryCacheContext();

  const { mutate: createBusinessInsurance, isLoading } = useMutation({
    mutationFn: (insuranceInfo) => {
      const { businessId } = getQueryFromCache([
        APP_CONSTANTS.QUERY_KEYS.BUSINESS.BUSINESS_REGISTRATION.ADD_BASIC_INFO,
      ]);

      const reqBody = {
        businessId,
        ...insuranceInfo,
      };

      return axiosClient.post(
        URL_CONSTANTS.BUSINESS.REGISTRATION.ADD_INSURANCE,
        reqBody
      );
    },
    onSuccess: (res) => {
      saveQueryToCache(
        [APP_CONSTANTS.QUERY_KEYS.BUSINESS.BUSINESS_REGISTRATION.ADD_INSURANCE],
        res?.data?.data
      );

      callback(true, res?.data);
    },
    onError: (error) => {
      callback(false, error?.response?.data?.message);
    },
  });

  return { createBusinessInsurance, isLoading };
}
