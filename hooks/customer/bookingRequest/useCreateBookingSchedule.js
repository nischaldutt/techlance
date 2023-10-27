import { useMutation } from "@tanstack/react-query";

import { useQueryCacheContext } from "@/contexts";
import { postRequest, putRequest } from "@/services";
import { APP_CONSTANTS, URL_CONSTANTS } from "@/constants";

export default function useCreateBookingSchedule(callback) {
  const { saveQueryToCache } = useQueryCacheContext();

  const { mutate: createBookingSchedule, isLoading } = useMutation({
    mutationFn: (reqBody) => {
      return !reqBody?.bookingId
        ? postRequest(
            URL_CONSTANTS.CUSTOMER.BOOKING_REQUEST.SAVE_SCHEDULE,
            reqBody
          )
        : putRequest(
            URL_CONSTANTS.CUSTOMER.BOOKING_REQUEST.UPDATE_SCHEDULE,
            reqBody
          );
    },
    onSuccess: (response) => {
      saveQueryToCache(
        [APP_CONSTANTS.QUERY_KEYS.CUSTOMER.BOOKING_REQUEST.SAVE_SCHEDULE],
        response?.payload
      );

      callback(true, response);
    },
    onError: (error) => {
      callback(false, error?.payload?.message);
    },
  });

  return { createBookingSchedule, isLoading };
}
