import { useMutation } from "@tanstack/react-query";

import { postRequest } from "@/services";
import { useQueryCacheContext } from "@/contexts";
import { APP_CONSTANTS, URL_CONSTANTS } from "@/constants";

export default function useConfirmBooking(callback) {
  const { getQueryFromCache, saveQueryToCache } = useQueryCacheContext();

  const { mutate: confirmBooking, isLoading } = useMutation({
    mutationFn: () => {
      const cachedBookingScheduleData = getQueryFromCache(
        APP_CONSTANTS.QUERY_KEYS.CUSTOMER.BOOKING_REQUEST.SAVE_SCHEDULE
      );

      return postRequest(
        URL_CONSTANTS.CUSTOMER.BOOKING_REQUEST.CONFIRM_BOOKING,
        { bookingId: cachedBookingScheduleData?.bookingId }
      );
    },
    onSuccess: (response) => {
      saveQueryToCache(
        [APP_CONSTANTS.QUERY_KEYS.CUSTOMER.BOOKING_REQUEST.CONFIRM_BOOKING],
        response?.payload
      );

      callback(true, response);
    },
    onError: (error) => {
      callback(false, error?.payload?.message);
    },
  });

  return { confirmBooking, isLoading };
}
