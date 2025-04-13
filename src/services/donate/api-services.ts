/* eslint-disable @typescript-eslint/no-unused-vars */
import API_ENDPOINTS from "@/services/donate/api-path";
import request from "@/services/interceptor";

export const getDonatesAsync = async (pageIndex: number) => {
  const response = await request<TResponseData<API.TGetDonates>>(
    API_ENDPOINTS.GET_DONATES,
    {
      method: "GET",
      params: {
        pageIndex: pageIndex,
      },
    }
  );
  return response.data;
};
