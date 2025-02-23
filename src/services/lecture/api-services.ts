import API_ENDPOINTS from "@/services/lecture/api-path";
import request from "@/services/interceptor";

export const createLectureAsync = async (body: FormData) => {
  const response = await request<TResponse>(API_ENDPOINTS.CREATE, {
    method: "POST",
    data: body,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export const getLecturesAsync = async (body?: REQUEST.TGetLectures | null) => {
  const params = new URLSearchParams();

  if (body?.pageIndex) params.append("pageIndex", String(body.pageIndex));
  if (body?.pageSize) params.append("pageSize", String(body.pageSize));

  if (Array.isArray(body?.includes)) {
    body.includes.forEach((include) => params.append("includes", include));
  }

  const response = await request<TResponseData<API.TLectures>>(
    `${API_ENDPOINTS.GET_LECTURES}?${params.toString()}`,
    {
      method: "GET",
    }
  );

  return response.data;
};
