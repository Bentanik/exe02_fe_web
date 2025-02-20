import API_ENDPOINTS from "@/services/auth/api-path";
import request from "@/services/interceptor";

export const loginAsync = async (body: REQUEST.TLogin) => {
  const response = await request<API.TLoginResponse>(API_ENDPOINTS.LOGIN, {
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
  const response = await request<API.TLoginResponse>(
    API_ENDPOINTS.REFRESH_TOKEN,
    {
      method: "GET",
    }
  );
  return response.data;
};
