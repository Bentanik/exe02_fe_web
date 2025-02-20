import API_ENDPOINTS from "@/services/level/api-path";
import request from "@/services/interceptor";

export const getLevelsAsync = async (body?: TRequestGetAll | null) => {
  const response = await request<TResponseData<API.TLevels>>(
    API_ENDPOINTS.GET_LEVELS,
    {
      method: "GET",
      params: body,
    }
  );

  return response.data;
};
