import { useMutation } from "@tanstack/react-query";

import { useQueryCacheContext } from "@/contexts";
import { postRequest, putRequest } from "@/services";
import { APP_CONSTANTS, URL_CONSTANTS } from "@/constants";

export default function useSaveBookingDetails(callback) {
  const { getQueryFromCache, saveQueryToCache } = useQueryCacheContext();

  const { mutate: saveBookingDetails, isLoading } = useMutation({
    mutationFn: (reqBody, isUpdateRequest) => {
      const cachedBookingScheduleInfo = getQueryFromCache(
        APP_CONSTANTS.QUERY_KEYS.CUSTOMER.BOOKING_REQUEST.SAVE_SCHEDULE
      );

      return !isUpdateRequest
        ? postRequest(
            URL_CONSTANTS.CUSTOMER.BOOKING_REQUEST.SAVE_BOOKING_DETAILS,
            { ...reqBody, bookingId: cachedBookingScheduleInfo?.bookingId }
          )
        : putRequest(
            URL_CONSTANTS.CUSTOMER.BOOKING_REQUEST.UPDATE_BOOKING_DEATILS,
            { ...reqBody, bookingId: cachedBookingScheduleInfo?.bookingId }
          );
    },
    onSuccess: (response) => {
      saveQueryToCache(
        [
          APP_CONSTANTS.QUERY_KEYS.CUSTOMER.BOOKING_REQUEST
            .SAVE_BOOKING_DETAILS,
        ],
        response?.payload
      );

      callback(true, response);
    },
    onError: (error) => {
      callback(false, error?.payload?.message);
    },
  });

  return { saveBookingDetails, isLoading };
}
