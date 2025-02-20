import API_ENDPOINTS from "@/services/category/api-path";
import request from "@/services/interceptor";

export const getCategoriesAsync = async (body?: TRequestGetAll | null) => {
  const response = await request<TResponseData<API.TCategories>>(
    API_ENDPOINTS.GET_CATEGORIES,
    {
      method: "GET",
      params: body,
    }
  );

  return response.data;
};
