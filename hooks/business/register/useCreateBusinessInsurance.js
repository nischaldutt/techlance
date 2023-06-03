import { useMutation, useQueryClient } from "@tanstack/react-query";

import axiosClient from "@/libs/axiosClient";
import { APP_CONSTANTS, URL_CONSTANTS } from "@/constants";

export default function useCreateBusinessInsurance(callback) {
  const queryClient = useQueryClient();

  const { mutate: createBusinessInsurance, isLoading } = useMutation({
    mutationFn: (insuranceInfo) => {
      const { businessId } = queryClient.getQueryData([
        APP_CONSTANTS.QUERY_KEYS.BUSINESS_REGISTRATION.ADD_BASIC_INFO,
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
      queryClient.setQueryData(
        [APP_CONSTANTS.QUERY_KEYS.BUSINESS_REGISTRATION.ADD_INSURANCE],
        (prevData) => {
          const {
            data: { data: cachedInsuranceData },
          } = res;
          return cachedInsuranceData;
        }
      );

      callback(true, res?.data);
    },
    onError: (error) => {
      callback(false, error?.response?.data?.message);
    },
  });

  return { createBusinessInsurance, isLoading };
}
