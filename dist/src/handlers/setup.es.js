import { jwtDecoder as U } from "@kinde/jwt-decoder";
import { config as e } from "../config/index.es.js";
import { generateUserObject as L } from "../utils/generateUserObject.es.js";
import { getAccessToken as R } from "../utils/getAccessToken.es.js";
import { getIdToken as T } from "../utils/getIdToken.es.js";
import { sessionManager as v } from "../session/sessionManager.es.js";
import { kindeClient as O } from "../session/kindeServerClient.es.js";
import { isTokenExpired as h } from "../utils/jwt/validation.es.js";
const A = async (n) => {
  var d, l, u, _, f, m;
  try {
    let t = await R(n.req), c = await T(n.req);
    if (!t || !c)
      return e.isDebugMode && console.log("setup: no access or id token - returning NOT_LOGGED_IN"), n.json(
        {
          message: "NOT_LOGGED_IN",
          env: {
            clientId: e.clientID,
            issuerUrl: e.issuerURL,
            redirectUrl: e.redirectURL
          }
        },
        { status: 200 }
      );
    const k = await v(n.req, n.res);
    if (h(t, 20)) {
      e.isDebugMode && console.log("setup: access or id token expired - attempting refresh");
      try {
        const s = await O.refreshTokens(k);
        t = s.access_token, c = s.id_token;
      } catch (s) {
        return e.isDebugMode && console.error("setup: refresh tokens failed - returning error"), n.json(
          {
            message: "REFRESH_FAILED",
            error: s instanceof Error ? s.message : s,
            env: {
              clientId: e.clientID,
              issuerUrl: e.issuerURL,
              redirectUrl: e.redirectURL
            }
          },
          { status: 500 }
        );
      }
    }
    let o = null, i = null;
    try {
      o = U(t);
    } catch (s) {
      return e.isDebugMode && console.error(
        "setup: access token decode failed, redirecting to login"
      ), n.json(
        {
          message: "ACCESS_TOKEN_DECODE_FAILED",
          error: s instanceof Error ? s.message : s,
          env: {
            clientId: e.clientID,
            issuerUrl: e.issuerURL,
            redirectUrl: e.redirectURL
          }
        },
        { status: 500 }
      );
    }
    try {
      i = U(c);
    } catch (s) {
      return e.isDebugMode && console.error("setup: id token decode failed, redirecting to login"), n.json(
        {
          message: "ID_TOKEN_DECODE_FAILED",
          error: s instanceof Error ? s.message : s,
          env: {
            clientId: e.clientID,
            issuerUrl: e.issuerURL,
            redirectUrl: e.redirectURL
          }
        },
        { status: 500 }
      );
    }
    if (!o || !i)
      return n.json(
        {
          message: "TOKENS_MISSING",
          error: "No access or id token",
          env: {
            clientId: e.clientID,
            issuerUrl: e.issuerURL,
            redirectUrl: e.redirectURL
          }
        },
        { status: 500 }
      );
    const p = o.permissions, g = o.org_code, D = o.feature_flags, E = i.org_codes, I = o.org_name, r = o.organization_properties, a = i.organizations;
    return n.json({
      accessToken: o,
      accessTokenEncoded: t,
      accessTokenRaw: t,
      idToken: i,
      idTokenRaw: c,
      idTokenEncoded: c,
      user: L(i, o),
      permissions: {
        permissions: p,
        orgCode: g
      },
      needsRefresh: !1,
      message: "OK",
      organization: {
        orgCode: g,
        orgName: I,
        properties: {
          city: (d = r == null ? void 0 : r.kp_org_city) == null ? void 0 : d.v,
          industry: (l = r == null ? void 0 : r.kp_org_industry) == null ? void 0 : l.v,
          postcode: (u = r == null ? void 0 : r.kp_org_postcode) == null ? void 0 : u.v,
          state_region: (_ = r == null ? void 0 : r.kp_org_state_region) == null ? void 0 : _.v,
          street_address: (f = r == null ? void 0 : r.kp_org_street_address) == null ? void 0 : f.v,
          street_address_2: (m = r == null ? void 0 : r.kp_org_street_address_2) == null ? void 0 : m.v
        }
      },
      featureFlags: D,
      userOrganizations: {
        orgCodes: E,
        orgs: a == null ? void 0 : a.map((s) => ({
          code: s == null ? void 0 : s.id,
          name: s == null ? void 0 : s.name
        }))
      },
      env: {
        clientId: e.clientID,
        issuerUrl: e.issuerURL,
        redirectUrl: e.redirectURL
      }
    });
  } catch (t) {
    return e.isDebugMode && console.error("setup: failed, error: ", t), n.json(
      {
        message: "SETUP_FAILED",
        error: t instanceof Error ? t.message : t,
        env: {
          clientId: e.clientID,
          issuerUrl: e.issuerURL,
          redirectUrl: e.redirectURL
        }
      },
      { status: 500 }
    );
  }
};
export {
  A as setup
};
