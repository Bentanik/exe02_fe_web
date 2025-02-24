/* eslint-disable @typescript-eslint/no-unused-vars */
import API_ENDPOINTS from "@/services/auth/api-path";
import request from "@/services/interceptor";
import { RegisterBodyType } from "@/utils/schema-validations/auth.schema";

export const loginAsync = async (idTokenFirebase: string) => {
  const response = await request<API.TLoginResponse>(API_ENDPOINTS.LOGIN, {
    method: "POST",
    data: {
      idTokenFirebase,
    },
  });

  return response.data;
};

export const registerAsync = async (body: RegisterBodyType) => {
  const response = await request<TResponse>(API_ENDPOINTS.REGISTER, {
    method: "POST",
    data: body,
  });
  return response.data;
};

export const logout = async () => {
  const response = await request<TResponseData>(API_ENDPOINTS.LOGOUT, {
    method: "POST",
  });
  return response.data;
};


export const refreshToken = async () => {
  // const response = await request<API.TLoginResponse>(
  //   API_ENDPOINTS.REFRESH_TOKEN,
  //   {
  //     method: "GET",
  //   }
  // );
  // return response.data;

};
