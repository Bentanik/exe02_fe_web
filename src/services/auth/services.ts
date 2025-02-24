/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMutation } from "@tanstack/react-query";
import { useAppDispatch } from "@/stores";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAppAuth } from "../../../firebase";
import { loginAsync, logout, registerAsync } from "@/services/auth/api-services";
import { loginSuccess } from "@/stores/user-slice";
import { removeStorageItem, setStorageItem } from "@/utils/local-storage";
import { RegisterBodyType } from "@/utils/schema-validations/auth.schema";

export const useServiceLogin = () => {
  const dispatch = useAppDispatch();
  return useMutation<API.TLoginResponse, TMeta, REQUEST.TLogin>({
    mutationFn: async (request: REQUEST.TLogin) => {
      const userCredential = await signInWithEmailAndPassword(
        firebaseAppAuth,
        request.email,
        request.password
      );

      const token = await userCredential.user.getIdToken();
      return await loginAsync(token);
    },
    onSuccess: (data) => {
      const {authTokenDTO, authUserDTO } = data;
      setStorageItem("accessToken", `${authTokenDTO.tokenType} ${authTokenDTO.accessToken}`);
      dispatch(loginSuccess(authUserDTO));
      // location.pathname = "/";
      if (authUserDTO.roleName === "Admin") location.pathname = "/admin/home";
      else location.pathname = "/";
      return data;
    },
  });
};

export const useServiceRegister = () => {
  return useMutation<TResponse, TMeta, RegisterBodyType>({
    mutationFn: registerAsync,
  });
};

export const useServiceLogout = () => {
  const dispatch = useAppDispatch();
  return useMutation<TResponseData, TMeta>({
    mutationFn: logout,
    onSuccess: (data) => {
      window.location.href = "/";
    },
    onError: (error) => {
      removeStorageItem("accessToken");
      window.location.href = "/";
    },
  });
};
