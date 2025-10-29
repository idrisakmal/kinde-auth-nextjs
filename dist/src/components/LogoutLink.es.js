import { jsx as i } from "react/jsx-runtime";
import { config as u, routes as f } from "../config/index.es.js";
function m({ children: r, postLogoutRedirectURL: o, ...t }) {
  return /* @__PURE__ */ i(
    "a",
    {
      href: `${u.apiPath}/${f.logout}${o ? `?post_logout_redirect_url=${o}` : ""}`,
      ...t,
      children: r
    }
  );
}
export {
  m as LogoutLink
};
