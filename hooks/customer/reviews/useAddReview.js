import { useMutation, useQueryClient } from "@tanstack/react-query";

import axiosClient from "@/libs/axiosClient";
import { APP_CONSTANTS, URL_CONSTANTS } from "@/constants";

export default function useAddReview(callback) {
  const queryClient = useQueryClient();

  const { mutate: addRemove, isLoading } = useMutation({
    mutationFn: () => {
      const reqBody = { bookingId: cachedBookingScheduleData?.bookingId };

      return axiosClient.post(
        URL_CONSTANTS.CUSTOMER.REVIEWS.ADD_BUSINESS_REIVEW,
        reqBody
      );
    },
    onSuccess: (res) => {
      // queryClient.setQueryData(
      //   [APP_CONSTANTS.QUERY_KEYS.CUSTOMER.REVIEWS.ADD_BUSINESS_REIVEW],
      //   (prevData) => {
      //     const {
      //       data: { data: cachedReviewInfo },
      //     } = res;
      //     return cachedReviewInfo;
      //   }
      // );

      callback(true, res?.data);
    },
    onError: (error) => {
      callback(false, error?.response?.data?.message);
    },
  });

  return { addRemove, isLoading };
}
