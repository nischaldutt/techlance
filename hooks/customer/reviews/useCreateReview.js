import { useMutation } from "@tanstack/react-query";

import { postRequest } from "@/services";
import { URL_CONSTANTS } from "@/constants";

export default function useCreateReview(callback) {
  const { mutate: createReview, isLoading } = useMutation({
    mutationFn: (businessReview) => {
      return postRequest(
        URL_CONSTANTS.CUSTOMER.REVIEWS.ADD_BUSINESS_REIVEW,
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

  return { createReview, isLoading };
}
