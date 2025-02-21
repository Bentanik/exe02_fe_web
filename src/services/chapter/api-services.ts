import API_ENDPOINTS from "@/services/chapter/api-path";
import request from "@/services/interceptor";

export const createChapterAsync = async (body: REQUEST.TCreateChapter) => {
  const response = await request<TResponse>(API_ENDPOINTS.CREATE, {
    method: "POST",
    data: body,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export const getChaptersAsync = async (body?: REQUEST.TGetChapters | null) => {
  const response = await request<TResponseData<API.TChapters>>(
    API_ENDPOINTS.GET_CHAPTERS,
    {
      method: "GET",
      params: body,
    }
  );

  return response.data;
};
