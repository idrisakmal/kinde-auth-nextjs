import { config as o } from "../config/index.es.js";
import { jwtDecoder as n } from "@kinde/jwt-decoder";
import { getAccessToken as t } from "../utils/getAccessToken.es.js";
import { redirectOnExpiredToken as i } from "../utils/redirectOnExpiredToken.es.js";
const d = (r, c) => async () => {
  try {
    const e = await t(r, c);
    return o.isDebugMode && console.log(
      "getAccessTokenFactory: running redirectOnExpiredToken check"
    ), i(e), n(e);
  } catch (e) {
    return o.isDebugMode && console.error(e), null;
  }
};
export {
  d as getAccessTokenFactory
};
