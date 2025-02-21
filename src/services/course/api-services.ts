import API_ENDPOINTS from "@/services/course/api-path";
import request from "@/services/interceptor";

export const createCourseAsync = async (body: FormData) => {
  const response = await request<TResponse>(API_ENDPOINTS.CREATE, {
    method: "POST",
    data: body,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export const getCoursesAsync = async (body?: REQUEST.TGetCourses | null) => {
  const response = await request<TResponseData<API.TCourses>>(
    API_ENDPOINTS.GET_COURSES,
    {
      method: "GET",
      params: body,
    }
  );

  return response.data;
};