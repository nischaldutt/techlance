import { useMutation, useQueryClient } from "@tanstack/react-query";

import axiosClient from "@/utils/axiosClient";
import { APP_CONSTANTS, URL_CONSTANTS } from "@/constants";

export default function useBusinessBasicInfo(callback) {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: (basicInfo) => {
      console.log({ basicInfo });
      const {
        businessName,
        businessAddress,
        businessUnits,
        businessHst,
        businessWebsite,
        discoverDescription,
        industryStandardAgreement,
      } = basicInfo;

      const reqBody = {
        name: businessName,
        address: businessAddress,
        hst: businessHst,
        unit: businessUnits,
        website: businessWebsite,
        discoverDescription: discoverDescription,
        industryStandardAgreement: industryStandardAgreement,
      };

      return axiosClient.post(
        URL_CONSTANTS.BUSINESS.REGISTRATION.ADD_BASIC_INFO,
        reqBody
      );
    },
    onSuccess: (res) => {
      queryClient.setQueryData(
        [APP_CONSTANTS.QUERY_KEYS.BUSINESS_REGISTRATION.ADD_BASIC_INFO],
        (prevData) => {
          const {
            address,
            businessId,
            discoveryDescription,
            hst,
            industryStandardAgreement,
            isVerified,
            name,
            unit,
            userId,
            website,
          } = res?.data?.data;
          const cachedData = {
            businessId,
            isVerified,
            userId,
            businessName: name,
            businessAddress: address,
            businessUnits: unit,
            businessHst: hst,
            businessWebsite: website,
            discoverDescription: discoveryDescription,
            industryStandardAgreement: industryStandardAgreement,
          };

          return cachedData;
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
