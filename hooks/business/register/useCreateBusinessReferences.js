import { useMutation, useQueryClient } from "@tanstack/react-query";

import axiosClient from "@/libs/axiosClient";
import { useQueryCacheContext } from "@/contexts";
import { APP_CONSTANTS, URL_CONSTANTS } from "@/constants";

export default function useCreateBusinessReferences(callback) {
  const { getQueryFromCache, saveQueryToCache } = useQueryCacheContext();

  const { mutate: createBusinessReferences, isLoading } = useMutation({
    mutationFn: (referenceInfo) => {
      const { businessId } = getQueryFromCache([
        APP_CONSTANTS.QUERY_KEYS.BUSINESS.BUSINESS_REGISTRATION.ADD_BASIC_INFO,
      ]);

      const reqBody = referenceInfo.map((refObj) => {
        return {
          businessId,
          ...refObj,
        };
      });

      return axiosClient.post(
        URL_CONSTANTS.BUSINESS.REGISTRATION.ADD_REFERENCES,
        reqBody
      );
    },
    onSuccess: (res) => {
      saveQueryToCache(
        [
          APP_CONSTANTS.QUERY_KEYS.BUSINESS.BUSINESS_REGISTRATION
            .ADD_REFERENCES,
        ],
        res?.data?.data
      );
      callback(true, res?.data);
    },
    onError: (error) => {
      callback(false, error?.response?.data?.message);
    },
  });

  return { createBusinessReferences, isLoading };
}
