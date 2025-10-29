import { redirect as o } from "next/navigation";
import { isTokenExpired as r } from "./jwt/validation.es.js";
import { config as e, routes as n } from "../config/index.es.js";
const g = (i) => {
  if (e.isDebugMode && console.log("redirectOnExpiredToken: checking for expired token"), !i) {
    e.isDebugMode && console.log("redirectOnExpiredToken: no token, not redirecting");
    return;
  }
  if (!r(i)) {
    e.isDebugMode && console.log(
      "redirectOnExpiredToken: token is not expired, not redirecting"
    );
    return;
  }
  e.isDebugMode && console.log(
    "redirectOnExpiredToken: token is defined and expired, redirecting"
  ), o(`${e.apiPath}/${n.login}`);
};
export {
  g as redirectOnExpiredToken
};
