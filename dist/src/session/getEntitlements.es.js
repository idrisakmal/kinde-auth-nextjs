import { config as n } from "../config/index.es.js";
import { getAccessToken as a } from "../utils/getAccessToken.es.js";
import { MemoryStorage as c, setActiveStorage as i, StorageKeys as m, getEntitlements as g, clearActiveStorage as l } from "../../node_modules/.pnpm/@kinde-oss_kinde-auth-react@5.8.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@kinde-oss/kinde-auth-react/dist/utils.es.js";
const y = (o, s) => async () => {
  try {
    const e = await a(o, s);
    if (!e)
      return null;
    const t = new c();
    i(t), await t.setSessionItem(m.accessToken, e);
    const r = await g();
    return l(), t.destroySession(), r;
  } catch (e) {
    return n.isDebugMode && console.error(e), null;
  }
};
export {
  y as getEntitlementsFactory
};
