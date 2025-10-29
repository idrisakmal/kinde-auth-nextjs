import { getHeaders as i } from "../utils/getHeaders.es.js";
import { isPreFetch as o } from "../utils/isPreFetch.es.js";
import n from "../utils/validateState.es.js";
import { config as c } from "../config/index.es.js";
const f = async (s) => {
  const a = await i(s.req);
  if (o(a))
    return null;
  const r = await s.kindeClient.register(
    s.sessionManager,
    {
      authUrlParams: {
        ...Object.fromEntries(s.searchParams),
        supports_reauth: "true"
      }
    }
  ), t = s.getSearchParam("post_login_redirect_url") || c.postLoginRedirectURL;
  t && await s.sessionManager.setSessionItem(
    "post_login_redirect_url",
    t
  );
  const e = s.searchParams.get("state");
  if (e) {
    if (!n(e))
      throw new Error("Invalid state supplied");
    await s.sessionManager.setSessionItem("state", e);
  }
  return s.redirect(r.toString());
};
export {
  f as register
};
