import { jsx as h } from "react/jsx-runtime";
import { config as m, routes as i } from "../config/index.es.js";
function w({
  children: l,
  postLoginRedirectURL: n,
  orgCode: o,
  authUrlParams: s,
  ...t
}) {
  const r = new URLSearchParams();
  let a = {};
  o != null && (a.org_code = o), n != null && (n != null && n.startsWith("/") && (n = `${typeof window < "u" ? window.location.origin : process.env.KINDE_SITE_URL}${n}`), a.post_login_redirect_url = n), a = { ...s, ...a };
  for (const f in a) r.append(f, a[f]);
  const u = `${m.apiPath}/${i.login}${r ? `?${r.toString()}` : ""}`;
  return /* @__PURE__ */ h("a", { href: u, ...t, children: l });
}
export {
  w as LoginLink
};
