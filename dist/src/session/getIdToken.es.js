import "next/headers";
import { config as r } from "../config/index.es.js";
import "../utils/constants.es.js";
import "destr";
import "cookie";
import { jwtDecoder as n } from "@kinde/jwt-decoder";
import { getIdToken as i } from "../utils/getIdToken.es.js";
import { redirectOnExpiredToken as c } from "../utils/redirectOnExpiredToken.es.js";
const u = (e, t) => async () => {
  try {
    const o = await i(e, t);
    return r.isDebugMode && console.log("getIdTokenFactory: running redirectOnExpiredToken check"), c(o), n(o);
  } catch (o) {
    return r.isDebugMode && console.error(o), null;
  }
};
export {
  u as getIdTokenFactory
};
