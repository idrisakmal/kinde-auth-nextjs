import { getAccessTokenFactory as e } from "./getAccessToken.es.js";
import { getBooleanFlagFactory as i } from "./getBooleanFlag.es.js";
import { getFlagFactory as a } from "./getFlag.es.js";
import { getIdTokenFactory as g } from "./getIdToken.es.js";
import { getIntegerFlagFactory as n } from "./getIntegerFlag.es.js";
import { getOrganizationFactory as m } from "./getOrganization.es.js";
import { getPermissionFactory as c } from "./getPermission.es.js";
import { getPermissionsFactory as s } from "./getPermissions.es.js";
import { getStringFlagFactory as f } from "./getStringFlag.es.js";
import { getUserFactory as F } from "./getUser.es.js";
import { getUserOrganizationsFactory as p } from "./getUserOrganizations.es.js";
import { isAuthenticatedFactory as l } from "./isAuthenticated.es.js";
import { getAccessTokenRawFactory as y } from "./getAccessTokenRaw.es.js";
import { getIdTokenRawFactory as k } from "./getIdTokenRaw.es.js";
import { kindeClient as d } from "./kindeServerClient.es.js";
import { sessionManager as T } from "./sessionManager.es.js";
import { getRolesFactory as u } from "./getRoles.es.js";
import { getClaimFactory as w } from "./getClaim.es.js";
import { config as A } from "../config/index.es.js";
import { getEntitlementsFactory as I } from "./getEntitlements.es.js";
const L = (t, o) => ({
  /**
   * This method is designed to work exclusively with the Pages Router in Next.js.
   * It is not compatible with the App Router.
   *
   * App Router users should use the `refreshData` method in `useKindeBrowserClient` instead.
   */
  refreshTokens: async () => {
    try {
      return await d.refreshTokens(
        await T(t, o)
      );
    } catch (r) {
      return A.isDebugMode && console.error(r), null;
    }
  },
  getAccessToken: e(t, o),
  getBooleanFlag: i(t, o),
  getFlag: a(t, o),
  getIdToken: g(t, o),
  getIdTokenRaw: k(t, o),
  getAccessTokenRaw: y(t, o),
  getIntegerFlag: n(t, o),
  getOrganization: m(t, o),
  getPermission: c(t, o),
  getPermissions: s(t, o),
  getStringFlag: f(t, o),
  getUser: F(t, o),
  getUserOrganizations: p(t, o),
  isAuthenticated: l(t, o),
  getRoles: u(t, o),
  getClaim: w(t, o),
  getEntitlements: I(t, o)
});
export {
  L as default
};
