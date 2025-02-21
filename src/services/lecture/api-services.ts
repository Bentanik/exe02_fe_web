import API_ENDPOINTS from "@/services/lecture/api-path";
import request from "@/services/interceptor";

// export const createChapterAsync = async (body: REQUEST.TCreateChapter) => {
//   const response = await request<TResponse>(API_ENDPOINTS.CREATE, {
//     method: "POST",
//     data: body,
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   });

//   return response.data;
// };

export const getLecturesAsync = async (body?: REQUEST.TGetLectures | null) => {
  const response = await request<TResponseData<API.TLectures>>(
    API_ENDPOINTS.GET_LECTURES,
    {
      method: "GET",
      params: body,
    }
  );

  return response.data;
};