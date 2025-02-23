/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import {
  getStorageItem,
} from "@/utils/local-storage";
import axios, { AxiosError } from "axios";
import useToast from "@/hooks/use-toast";
import useLogout from "@/hooks/use-logout";

const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER,
  timeout: 50000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});


const errorHandler = async (error: AxiosError) => {
  const responseMeta: TMeta = error.response?.data as TMeta;
  const { addToast } = useToast();
  if (!error?.response) {
    const result: TMeta = {
      detail: "Network not available!",
      errorCode: "NetWork_503",
      status: 503,
      title: "Network not available!",
    };
    addToast({
      type: "error",
      description: result.detail,
      duration: 5000,
    });
    return Promise.reject(result);
  } else {
    switch (responseMeta.errorCode) {
      case "auth_forgot_01":
        addToast({
          type: "error",
          description: responseMeta.detail,
          duration: 5000,
        });
        break;
      case "account_ban_01":
        addToast({
          type: "error",
          description: responseMeta.detail,
          duration: 5000,
        });
        useLogout().handleLogout();
        break;
      default:
        break;
    }
  }

  if (error?.response?.status === 403) {
    const result: TMeta = {
      detail: "Not permission",
      errorCode: "Forbident",
      status: 403,
      title: "Not permission",
    };
    addToast({
      type: "error",
      description: "Sorry, you do not permission",
      duration: 5000,
    });
    return Promise.reject(result);
  }

  return Promise.reject(responseMeta);
};

request.interceptors.request.use(
  async (config) => {
    try {
      const token = getStorageItem("accessToken");
      if (token) {
        config.headers.Authorization = token;
      }
      return config;
    } catch (err) {
      console.table(err);
      return config;
    }
  },
  (error) => Promise.reject(error)
);

request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return errorHandler(error);
  }
);

export default request;