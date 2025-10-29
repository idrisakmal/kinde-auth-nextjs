import { jsx as o } from "react/jsx-runtime";
import { config as i, routes as n } from "../config/index.es.js";
function m({ children: t, orgName: r, ...e }) {
  return /* @__PURE__ */ o(
    "a",
    {
      href: `${i.apiPath}/${n.createOrg}${r ? `?org_name=${r}` : ""}`,
      ...e,
      children: t
    }
  );
}
export {
  m as CreateOrgLink
};
