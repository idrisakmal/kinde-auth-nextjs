import { getHeaders as o } from "../utils/getHeaders.es.js";
import n from "../utils/validateState.es.js";
import { isPreFetch as i } from "../utils/isPreFetch.es.js";
const p = async (a) => {
  const t = await o(a.req);
  if (i(t))
    return null;
  const s = {
    org_name: a.getSearchParam("org_name") ?? void 0,
    is_create_org: !0
  }, e = a.searchParams.get("state");
  if (e) {
    if (!n(e))
      throw new Error("Invalid state supplied");
    await a.sessionManager.setSessionItem("state", e);
  }
  const r = await a.kindeClient.createOrg(
    a.sessionManager,
    s
  );
  return a.redirect(r.toString());
};
export {
  p as createOrg
};
