import { useMutation, useQueryClient } from "@tanstack/react-query";

import axiosClient from "@/libs/axiosClient";
import { APP_CONSTANTS, URL_CONSTANTS } from "@/constants";

export default function useSaveBookingDetails(callback) {
  const queryClient = useQueryClient();

  const { mutate: saveBookingDetails, isLoading } = useMutation({
    mutationFn: (bookingDetailsObj, isUpdateRequest) => {
      const cachedBookingScheduleData = queryClient.getQueryData([
        APP_CONSTANTS.QUERY_KEYS.CUSTOMER.BOOKING_REQUEST.SAVE_SCHEDULE,
      ]);

      const reqBody = {
        ...bookingDetailsObj,
        bookingId: cachedBookingScheduleData?.bookingId,
      };

      return !isUpdateRequest
        ? axiosClient.post(
            URL_CONSTANTS.CUSTOMER.BOOKING_REQUEST.SAVE_BOOKING_DETAILS,
            reqBody
          )
        : axiosClient.put(
            URL_CONSTANTS.CUSTOMER.BOOKING_REQUEST.UPDATE_BOOKING_DEATILS,
            reqBody
          );
    },
    onSuccess: (res) => {
      queryClient.setQueryData(
        [
          APP_CONSTANTS.QUERY_KEYS.CUSTOMER.BOOKING_REQUEST
            .SAVE_BOOKING_DETAILS,
        ],
        (prevData) => {
          const {
            data: { data: cachedBookingDetails },
          } = res;
          return cachedBookingDetails;
        }
      );

      callback(true, res?.data);
    },
    onError: (error) => {
      callback(false, error?.response?.data?.message);
    },
  });

  return { saveBookingDetails, isLoading };
}
