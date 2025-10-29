import { getUserFactory as i } from "./getUser.es.js";
import { getAccessToken as n } from "../utils/getAccessToken.es.js";
import "@kinde/jwt-validator";
import { config as c } from "../config/index.es.js";
import "@kinde/jwt-decoder";
import "next/navigation";
import { redirectOnExpiredToken as a } from "../utils/redirectOnExpiredToken.es.js";
const k = (o, t) => async () => {
  const e = await n(o, t);
  c.isDebugMode && console.log("isAuthenticatedFactory: running redirectOnExpiredToken check"), a(e);
  const r = await i(o, t)();
  return e && !!r;
};
export {
  k as isAuthenticatedFactory
};
