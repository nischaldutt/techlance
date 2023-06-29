import { useMutation } from "@tanstack/react-query";

import axiosClient from "@/libs/axiosClient";
import { URL_CONSTANTS } from "@/constants";

export default function useEditReview(callback) {
  const { mutate: editReview, isLoading } = useMutation({
    mutationFn: (businessReview) => {
      return axiosClient.put(
        URL_CONSTANTS.CUSTOMER.REVIEWS.EDIT_BUSINESS_REIVEW,
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

  return { editReview, isLoading };
}
