import { isPreFetch as m } from "../utils/isPreFetch.es.js";
import { getHeaders as g } from "../utils/getHeaders.es.js";
import { setActiveStorage as d, MemoryStorage as l, StorageKeys as u, PortalPage as f, generatePortalUrl as P } from "../../node_modules/.pnpm/@kinde-oss_kinde-auth-react@5.8.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@kinde-oss/kinde-auth-react/dist/utils.es.js";
import { isValidEnumValue as p } from "../utils/isValidEnumValue.es.js";
import { config as a, routes as U } from "../config/index.es.js";
const b = async (e) => {
  const c = await g(e.req);
  if (m(c))
    return null;
  const s = new l();
  d(s);
  const t = await e.sessionManager.getSessionItem("access_token");
  if (!t)
    return e.redirect(`${a.apiPath}/${U.login}`);
  await s.setSessionItem(u.accessToken, t);
  const n = e.searchParams.get("returnUrl") || a.redirectURL;
  try {
    const r = e.searchParams.get("subNav"), i = p(f, r) ? r : void 0, o = await P({
      subNav: i,
      returnUrl: n,
      domain: a.issuerURL
    });
    if (o.url)
      return e.redirect(o.url.toString());
  } catch (r) {
    return console.error("Portal URL generation failed:", r), e.redirect(a.redirectURL);
  }
};
export {
  b as portal
};
