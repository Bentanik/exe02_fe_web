/* eslint-disable @typescript-eslint/no-unused-vars */
import API_ENDPOINTS from "@/services/user/api-path";
import request from "@/services/interceptor";

export const GetBillByIdAsync = async (billId: string) => {
  const response = await request<TResponseData<API.TGetBillByIdDTO>>(
    API_ENDPOINTS.GET_BILL_BY_ID,
    {
      method: "GET",
      params: {
        billId: billId,
      },
    }
  );
  return response.data;
};
