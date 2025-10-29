import { jwtDecoder as r } from "@kinde/jwt-decoder";
import { config as c } from "../config/index.es.js";
import { generateOrganizationObject as a } from "../utils/generateOrganizationObject.es.js";
import { sessionManager as m } from "./sessionManager.es.js";
import { getAccessToken as g } from "../utils/getAccessToken.es.js";
const T = (t, e) => async () => {
  try {
    const o = await (await m(t, e)).getSessionItem("id_token");
    if (!o)
      throw new Error("ID token is missing");
    const n = r(o), i = await g(t, e), s = r(i);
    return a(n, s);
  } catch (o) {
    return c.isDebugMode && console.error(o), null;
  }
};
export {
  T as getOrganizationFactory
};
