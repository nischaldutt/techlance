import { useMutation } from "@tanstack/react-query";

import axiosClient from "@/libs/axiosClient";
import { putRequest } from "@/services";
import { URL_CONSTANTS } from "@/constants";

export default function useEditReview(callback) {
  const { mutate: editReview, isLoading } = useMutation({
    mutationFn: (businessReview) => {
      return putRequest(
        URL_CONSTANTS.CUSTOMER.REVIEWS.EDIT_BUSINESS_REIVEW,
        businessReview
      );
    },
    onSuccess: (response) => {
      callback(true, response);
    },
    onError: (error) => {
      callback(false, error?.payload?.message);
    },
  });

  return { editReview, isLoading };
}
