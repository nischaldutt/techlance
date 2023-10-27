import { useMutation } from "@tanstack/react-query";

import { postRequest } from "@/services";
import { useQueryCacheContext } from "@/contexts";
import { APP_CONSTANTS, URL_CONSTANTS } from "@/constants";

export default function useCreateBusinessInsurance(callback) {
  const { getQueryFromCache, saveQueryToCache } = useQueryCacheContext();

  const { mutate: createBusinessInsurance, isLoading } = useMutation({
    mutationFn: (insuranceInfo) => {
      const { businessId } = getQueryFromCache(
        APP_CONSTANTS.QUERY_KEYS.BUSINESS.BUSINESS_REGISTRATION.ADD_BASIC_INFO
      );

      return postRequest(URL_CONSTANTS.BUSINESS.REGISTRATION.ADD_INSURANCE, {
        businessId,
        ...insuranceInfo,
      });
    },
    onSuccess: (response) => {
      saveQueryToCache(
        [APP_CONSTANTS.QUERY_KEYS.BUSINESS.BUSINESS_REGISTRATION.ADD_INSURANCE],
        response?.payload
      );

      callback(true, response);
    },
    onError: (error) => {
      callback(false, error?.payload?.message);
    },
  });

  return { createBusinessInsurance, isLoading };
}
