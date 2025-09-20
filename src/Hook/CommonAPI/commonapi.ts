import { useMutation } from "@tanstack/react-query";
import { LoginAPI } from "../../APIs/CommonAPI/commonapi";

export const useLogin = () => {
  return useMutation({
    mutationFn: async (credentials:Object) => {
      const response = await LoginAPI(credentials);
      return response;
    }
  });
};
