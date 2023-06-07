import { useMutation, useQueryClient } from "@tanstack/react-query";

import axiosClient from "@/libs/axiosClient";
import { APP_CONSTANTS, URL_CONSTANTS } from "@/constants";

export default function useCreateBookingSchedule(callback) {
  const queryClient = useQueryClient();

  const { mutate: createBookingSchedule, isLoading } = useMutation({
    mutationFn: (bookingScheduleObj) => {
      return !bookingScheduleObj?.bookingId
        ? axiosClient.post(
            URL_CONSTANTS.CUSTOMER.BOOKING_REQUEST.SAVE_SCHEDULE,
            bookingScheduleObj
          )
        : axiosClient.put(
            URL_CONSTANTS.CUSTOMER.BOOKING_REQUEST.UPDATE_SCHEDULE,
            bookingScheduleObj
          );
    },
    onSuccess: (res) => {
      queryClient.setQueryData(
        [APP_CONSTANTS.QUERY_KEYS.CUSTOMER.BOOKING_REQUEST.SAVE_SCHEDULE],
        (prevData) => {
          const {
            data: { data: cachedBookingScheduleData },
          } = res;
          return cachedBookingScheduleData;
        }
      );

      callback(true, res?.data);
    },
    onError: (error) => {
      callback(false, error?.response?.data?.message);
    },
  });

  return { createBookingSchedule, isLoading };
}
