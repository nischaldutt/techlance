import { useMutation } from "@tanstack/react-query";

import { postRequest, putRequest } from "@/services";
import { useQueryCacheContext } from "@/contexts";
import { APP_CONSTANTS, URL_CONSTANTS } from "@/constants";

export default function useCreateBusinessBasicInfo(callback) {
  const { saveQueryToCache } = useQueryCacheContext();

  const { mutate: createBusiness, isLoading } = useMutation({
    mutationFn: (basicInfo) => {
      return basicInfo?.businessId
        ? putRequest(
            URL_CONSTANTS.BUSINESS.REGISTRATION.ADD_BASIC_INFO,
            basicInfo
          )
        : postRequest(
            URL_CONSTANTS.BUSINESS.REGISTRATION.ADD_BASIC_INFO,
            basicInfo
          );
    },
    onSuccess: (response) => {
      saveQueryToCache(
        [
          APP_CONSTANTS.QUERY_KEYS.BUSINESS.BUSINESS_REGISTRATION
            .ADD_BASIC_INFO,
        ],
        response?.payload
      );

      callback(true, response);
    },
    onError: (error) => {
      callback(false, error?.payload?.message);
    },
  });

  return { createBusiness, isLoading };
}
