import { jsx as l } from "react/jsx-runtime";
import { config as p, routes as s } from "../config/index.es.js";
function c({
  children: a,
  orgCode: t,
  postLoginRedirectURL: i,
  authUrlParams: o,
  ...f
}) {
  let e = new URLSearchParams(), r = {};
  t != null && (r.org_code = t), i != null && (r.post_login_redirect_url = i), r = { ...o, ...r };
  for (const n in r) e.append(n, r[n]);
  return /* @__PURE__ */ l(
    "a",
    {
      href: `${p.apiPath}/${s.register}${e ? `?${e.toString()}` : ""}`,
      ...f,
      children: a
    }
  );
}
export {
  c as RegisterLink
};
