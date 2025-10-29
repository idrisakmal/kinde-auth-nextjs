import { isPreFetch as i } from "../utils/isPreFetch.es.js";
import { getHeaders as o } from "../utils/getHeaders.es.js";
import n from "../utils/validateState.es.js";
import { config as c } from "../config/index.es.js";
const f = async (s) => {
  const e = await o(s.req);
  if (i(e))
    return null;
  const a = s.searchParams.get("state");
  if (a) {
    if (!n(a))
      throw new Error("Invalid state supplied");
    await s.sessionManager.setSessionItem("state", a);
  }
  const r = await s.kindeClient.login(
    s.sessionManager,
    {
      authUrlParams: {
        ...Object.fromEntries(s.searchParams),
        supports_reauth: "true"
      }
    }
  ), t = s.getSearchParam("post_login_redirect_url") || c.postLoginRedirectURL;
  return t && await s.sessionManager.setSessionItem(
    "post_login_redirect_url",
    t
  ), s.redirect(r.toString());
};
export {
  f as login
};
