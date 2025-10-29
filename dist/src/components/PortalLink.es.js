import { jsx as e } from "react/jsx-runtime";
import { config as s, routes as f } from "../config/index.es.js";
function d({
  subNav: o,
  returnUrl: t,
  children: i,
  ...p
}) {
  const r = new URLSearchParams();
  o !== void 0 && r.append("subNav", o), t !== void 0 && r.append("returnUrl", t);
  const a = r.toString(), n = `${s.apiPath}/${f.portal}${a ? `?${a}` : ""}`;
  return n && /* @__PURE__ */ e("a", { href: n, ...p, children: i });
}
export {
  d as PortalLink
};
