/* eslint-disable @typescript-eslint/no-explicit-any */
import API_ENDPOINTS from "@/services/chapter/api-path";
import request from "@/services/interceptor";

export const createChapterAsync = async (body: REQUEST.TCreateChapter) => {
  const response = await request<TResponse>(API_ENDPOINTS.CREATE, {
    method: "POST",
    data: body,
  });

  return response.data;
};

export const getChaptersAsync = async (body?: REQUEST.TGetChapters | null) => {
  const params = new URLSearchParams();

  if (body?.pageIndex) params.append("pageIndex", String(body.pageIndex));
  if (body?.pageSize) params.append("pageSize", String(body.pageSize));
  
  if (Array.isArray(body?.includes)) {
    body.includes.forEach((include) => params.append("includes", include));
  }
  
  const response = await request<TResponseData<API.TChapters>>(
    `${API_ENDPOINTS.GET_CHAPTERS}?${params.toString()}`,
    {
      method: "GET",
    }
  );

  return response.data;
};
