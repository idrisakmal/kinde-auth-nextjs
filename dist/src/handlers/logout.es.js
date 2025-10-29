import { config as a } from "../config/index.es.js";
import { isPreFetch as s } from "../utils/isPreFetch.es.js";
import { getHeaders as i } from "../utils/getHeaders.es.js";
const m = async (t) => {
  const o = await i(t.req);
  if (s(o))
    return null;
  const e = await t.kindeClient.logout(
    t.sessionManager
  );
  let r = t.getSearchParam("post_logout_redirect_url") || a.postLogoutRedirectURL;
  return r != null && r.startsWith("/") && (r = a.redirectURL + r), r && e.searchParams.set("redirect", r), t.redirect(e.toString());
};
export {
  m as logout
};
