import { useMutation } from "@tanstack/react-query";

import { postRequest } from "@/services";
import { useQueryCacheContext } from "@/contexts";
import { APP_CONSTANTS, URL_CONSTANTS } from "@/constants";

export default function useCreateBusinessReferences(callback) {
  const { getQueryFromCache, saveQueryToCache } = useQueryCacheContext();

  const { mutate: createBusinessReferences, isLoading } = useMutation({
    mutationFn: (referenceInfo) => {
      const { businessId } = getQueryFromCache(
        APP_CONSTANTS.QUERY_KEYS.BUSINESS.BUSINESS_REGISTRATION.ADD_BASIC_INFO
      );

      const reqBody = referenceInfo.map((refObj) => {
        return {
          businessId,
          ...refObj,
        };
      });

      return postRequest(
        URL_CONSTANTS.BUSINESS.REGISTRATION.ADD_REFERENCES,
        reqBody
      );
    },
    onSuccess: (response) => {
      saveQueryToCache(
        [
          APP_CONSTANTS.QUERY_KEYS.BUSINESS.BUSINESS_REGISTRATION
            .ADD_REFERENCES,
        ],
        response?.payload
      );

      callback(true, response);
    },
    onError: (error) => {
      callback(false, error?.payload?.message);
    },
  });

  return { createBusinessReferences, isLoading };
}
