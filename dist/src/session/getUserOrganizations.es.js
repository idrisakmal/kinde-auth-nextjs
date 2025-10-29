import { sessionManager as u } from "./sessionManager.es.js";
import { kindeClient as e } from "./kindeServerClient.es.js";
import { config as l } from "../config/index.es.js";
const C = (o, t) => async () => {
  try {
    const a = await u(o, t), i = await e.getUserOrganizations(a), r = await e.getClaimValue(
      a,
      "organizations",
      "id_token"
    ) ?? [], g = await e.getClaimValue(
      a,
      "x-hasura-organizations",
      "id_token"
    ) ?? [], c = [...r, ...g], m = await e.getClaimValue(
      a,
      "x-hasura-org-codes",
      "id_token"
    ) ?? [], s = [...c].map((n) => ({
      code: n == null ? void 0 : n.id,
      name: n == null ? void 0 : n.name
    })), d = {
      orgCodes: [...i.orgCodes, ...m],
      orgs: s
    };
    return s.length > 0 && console.warn(
      "Warning: organizations are not in ID token so names are missing."
    ), d;
  } catch (a) {
    return l.isDebugMode && console.debug("getUserOrganization error:", a), null;
  }
};
export {
  C as getUserOrganizationsFactory
};
