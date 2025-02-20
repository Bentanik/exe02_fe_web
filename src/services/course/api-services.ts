import API_ENDPOINTS from "@/services/course/api-path";
import request from "@/services/interceptor";

export const createCourseAsync = async (body: REQUEST.TCreateCourse) => {
  const response = await request<TResponse>(API_ENDPOINTS.CREATE, {
    method: "POST",
    data: body,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};
