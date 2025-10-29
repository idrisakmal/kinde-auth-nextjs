import { getStringFlagFactory as w, getIntegerFlagFactory as z, getBooleanFlagFactory as C, getFlagFactory as R } from "./feature-flag-factory.es.js";
import { getOrganizationFactory as O } from "./organization-factory.es.js";
import { getRawIdTokenFactory as v, getNextTypedIdTokenFactory as x, getRawAccessTokenFactory as F, getNextTypedAccessTokenFactory as E, getClaimFactory as I } from "./token-factory.es.js";
import { jwtDecoder as T } from "@kinde/jwt-decoder";
import { generateUserObject as N } from "../../utils/generateUserObject.es.js";
const S = (n) => ({
  getFlag: R(n.featureFlags),
  getBooleanFlag: C(n.featureFlags),
  getIntegerFlag: z(n.featureFlags),
  getStringFlag: w(n.featureFlags),
  getClaim: I(n.accessToken, n.idToken),
  getAccessToken: E(n.accessToken),
  getToken: F(n.accessTokenEncoded),
  getAccessTokenRaw: F(n.accessTokenEncoded),
  getIdToken: x(n.idToken),
  getIdTokenRaw: v(n.idTokenRaw),
  getOrganization: O(n.idToken, n.accessToken),
  getPermissions: () => n.permissions,
  getUserOrganizations: () => n.userOrganizations,
  getPermission: (t) => {
    var i, e;
    return n.permissions ? {
      isGranted: (i = n.permissions.permissions) == null ? void 0 : i.some((a) => a === t),
      orgCode: (e = n.organization) == null ? void 0 : e.orgCode
    } : { isGranted: !1, orgCode: null };
  },
  getUser: () => n.user
}), b = (n) => ({
  ...n,
  ...S(n),
  isAuthenticated: !!n.user,
  accessTokenRaw: n.accessTokenEncoded,
  idTokenEncoded: n.idTokenRaw
}), h = async (n) => {
  var c, l, m, u, _, k;
  const t = await n.getAccessToken(), i = await n.getIdToken(), e = T(t), a = T(i), d = (e == null ? void 0 : e.permissions) ?? [], g = e == null ? void 0 : e.org_code, p = e == null ? void 0 : e.feature_flags, y = (a == null ? void 0 : a.org_codes) ?? [], f = e == null ? void 0 : e.org_name, o = e == null ? void 0 : e.organization_properties, r = (a == null ? void 0 : a.organizations) ?? [];
  return {
    accessToken: e,
    accessTokenEncoded: t,
    error: null,
    featureFlags: p,
    idToken: a,
    idTokenRaw: i,
    isAuthenticated: !1,
    isLoading: n.isLoading,
    organization: {
      orgCode: g,
      orgName: f,
      // @ts-expect-error
      // TODO: This needs to be fixed in 3.0
      // The type contract expects the properties to be prefixed with kp_org_,
      // but the actual properties are *not* prefixed
      // Technically, these properties have been bugged and never worked.
      // We need to keep it broken for backwards compatibility.
      properties: {
        city: (c = o == null ? void 0 : o.kp_org_city) == null ? void 0 : c.v,
        industry: (l = o == null ? void 0 : o.kp_org_industry) == null ? void 0 : l.v,
        postcode: (m = o == null ? void 0 : o.kp_org_postcode) == null ? void 0 : m.v,
        state_region: (u = o == null ? void 0 : o.kp_org_state_region) == null ? void 0 : u.v,
        street_address: (_ = o == null ? void 0 : o.kp_org_street_address) == null ? void 0 : _.v,
        street_address_2: (k = o == null ? void 0 : o.kp_org_street_address_2) == null ? void 0 : k.v
      }
    },
    permissions: {
      permissions: d,
      orgCode: g
    },
    user: a && e ? N(a, e) : null,
    userOrganizations: {
      orgCodes: y,
      orgs: r == null ? void 0 : r.map((s) => ({
        code: s == null ? void 0 : s.id,
        name: s == null ? void 0 : s.name
      }))
    }
  };
};
export {
  b as constructKindeClientState,
  h as transformReactAuthStateToNextState
};
