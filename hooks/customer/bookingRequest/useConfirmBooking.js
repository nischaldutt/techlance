import { useMutation, useQueryClient } from "@tanstack/react-query";

import axiosClient from "@/libs/axiosClient";
import { APP_CONSTANTS, URL_CONSTANTS } from "@/constants";

export default function useConfirmBooking(callback) {
  const queryClient = useQueryClient();

  const { mutate: confirmBooking, isLoading } = useMutation({
    mutationFn: () => {
      const cachedBookingScheduleData = queryClient.getQueryData([
        APP_CONSTANTS.QUERY_KEYS.CUSTOMER.BOOKING_REQUEST.SAVE_SCHEDULE,
      ]);

      const reqBody = { bookingId: cachedBookingScheduleData?.bookingId };

      return axiosClient.post(
        URL_CONSTANTS.CUSTOMER.BOOKING_REQUEST.CONFIRM_BOOKING,
        reqBody
      );
    },
    onSuccess: (res) => {
      queryClient.setQueryData(
        [APP_CONSTANTS.QUERY_KEYS.CUSTOMER.BOOKING_REQUEST.CONFIRM_BOOKING],
        (prevData) => {
          const {
            data: { data: cachedBookingRequest },
          } = res;
          return cachedBookingRequest;
        }
      );

      callback(true, res?.data);
    },
    onError: (error) => {
      callback(false, error?.response?.data?.message);
    },
  });

  return { confirmBooking, isLoading };
}
