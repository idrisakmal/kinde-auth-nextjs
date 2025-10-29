import { config as o } from "../config/index.es.js";
import { sessionManager as t } from "../session/sessionManager.es.js";
import { validateToken as r } from "./jwt/validation.es.js";
const k = async (s, i) => {
  try {
    const e = await (await t(s, i)).getSessionItem("access_token");
    return !e || typeof e != "string" ? (o.isDebugMode && console.warn(
      "getAccessToken: invalid token or token is missing (are you logged in?)"
    ), null) : await r({
      token: e
    }) ? e : (o.isDebugMode && console.error("getAccessToken: invalid token"), null);
  } catch (n) {
    return o.isDebugMode && console.error("getAccessToken", n), null;
  }
};
export {
  k as getAccessToken
};
