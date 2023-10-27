import { useMutation } from "@tanstack/react-query";

import { postRequest } from "@/services";
import { URL_CONSTANTS } from "@/constants";

export default function useCreateService(callback) {
  const { mutate: createService, isLoading } = useMutation({
    mutationFn: (reqBody) => {
      return postRequest(
        URL_CONSTANTS.BUSINESS.SERVICES.CREATE_SERVICE,
        reqBody
      );
    },
    onSuccess: (response) => {
      callback(true, response?.payload?.message);
    },
    onError: (error) => {
      callback(false, error?.payload?.message);
    },
  });

  return { createService, isLoading };
}
