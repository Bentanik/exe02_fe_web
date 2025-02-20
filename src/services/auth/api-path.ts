/* eslint-disable import/no-anonymous-default-export */
const AUTH = "/auth/v1";
const LOGIN = AUTH + "/login";
const REGISTER = AUTH + "/register";
const LOGOUT = AUTH + "/logout";
const REFRESH_TOKEN = AUTH + "/refresh-token";

export default {
  LOGIN,
  REGISTER,
  LOGOUT,
  REFRESH_TOKEN,
};
