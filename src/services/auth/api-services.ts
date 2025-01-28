import API_ENDPOINTS from "@/services/auth/api-path";
import request from "@/services/interceptor";

export const loginAsync = async (body: REQUEST.TLogin) => {
  const response = await request<API.TLoginResponse>(API_ENDPOINTS.LOGIN, {
    method: "POST",
    data: body,
  });

  return response.data;
};
