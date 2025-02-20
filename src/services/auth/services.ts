import { useMutation } from "@tanstack/react-query";
import { loginAsync } from "./api-services";
import { useAppDispatch } from "@/stores";
import { loginSuccess } from "@/stores/user-slice";
import { setStorageItem } from "@/utils/local-storage";

export const useServiceLogin = () => {
  const dispatch = useAppDispatch();
  return useMutation<API.TLoginResponse, TMeta, REQUEST.TLogin>({
    mutationFn: loginAsync,
    onSuccess: (data) => {
      const { authTokenDTO, authUserDTO } = data;
      setStorageItem(
        "accessToken",
        `${authTokenDTO.tokenType} ${authTokenDTO.accessToken}`
      );
      dispatch(loginSuccess(authUserDTO));
      if (authUserDTO.roleName === "Admin") location.pathname = "/admin/home";
      else location.pathname = "/";
      return data;
    },
  });
};