import { config as o } from "../config/index.es.js";
import { sessionManager as s } from "../session/sessionManager.es.js";
import { validateToken as a } from "./jwt/validation.es.js";
const c = async (i, t) => {
  const r = "id_token";
  try {
    const e = await (await s(i, t)).getSessionItem(r);
    return !e || typeof e != "string" ? (o.isDebugMode && console.warn(
      "getIdToken: invalid token or token is missing (are you logged in?)"
    ), null) : await a({
      token: e
    }) ? e : (o.isDebugMode && console.error("getIdToken: invalid token"), null);
  } catch (n) {
    return o.isDebugMode && console.error("getIdToken", n), null;
  }
};
export {
  c as getIdToken
};
