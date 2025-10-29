import { config as i } from "../config/index.es.js";
import { generateUserObject as a } from "../utils/generateUserObject.es.js";
import { jwtDecoder as n } from "@kinde/jwt-decoder";
import { getAccessToken as m } from "../utils/getAccessToken.es.js";
import { getIdToken as f } from "../utils/getIdToken.es.js";
const p = (o, r) => async () => {
  try {
    const e = await f(o, r);
    if (!e)
      return null;
    const c = n(e), t = await m(o, r);
    if (!t)
      return null;
    const s = n(t);
    return a(c, s);
  } catch (e) {
    return i.isDebugMode && console.debug("getUser", e), null;
  }
};
export {
  p as getUserFactory
};
