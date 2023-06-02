import { useMutation, useQueryClient } from "@tanstack/react-query";

import axiosClient from "@/libs/axiosClient";
import { APP_CONSTANTS, URL_CONSTANTS } from "@/constants";

export default function useCreateBusinessReferences(callback) {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: (referenceInfo) => {
      const { businessId } = queryClient.getQueryData([
        APP_CONSTANTS.QUERY_KEYS.BUSINESS_REGISTRATION.ADD_BASIC_INFO,
      ]);

      const reqBody = referenceInfo.map((refObj) => {
        return {
          businessId,
          ...refObj,
        };
      });

      return axiosClient.post(
        URL_CONSTANTS.BUSINESS.REGISTRATION.ADD_REFERENCE,
        reqBody
      );
    },
    onSuccess: (res) => {
      queryClient.setQueryData(
        [APP_CONSTANTS.QUERY_KEYS.BUSINESS_REGISTRATION.ADD_REFERENCE],
        (prevData) => {
          const {
            data: { data: cachedReferenceData },
          } = res;
          return cachedReferenceData;
        }
      );

      callback(true, res?.data);
    },
    onError: (error) => {
      callback(false, error?.response?.data?.message);
    },
  });

  return { mutate, isLoading };
}
