import { useMutation } from "@tanstack/react-query";

import axiosClient from "@/libs/axiosClient";
import { URL_CONSTANTS } from "@/constants";

export default function useCreateReview(callback) {
  const { mutate: createReview, isLoading } = useMutation({
    mutationFn: (businessReview) => {
      return axiosClient.post(
        URL_CONSTANTS.CUSTOMER.REVIEWS.ADD_BUSINESS_REIVEW,
        businessReview
      );
    },
    onSuccess: (res) => {
      callback(true, res?.data);
    },
    onError: (error) => {
      callback(false, error?.response?.data?.message);
    },
  });

  return { createReview, isLoading };
}
