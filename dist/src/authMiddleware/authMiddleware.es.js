import { NextResponse as l } from "next/server";
import { config as r, routes as _ } from "../config/index.es.js";
import { jwtDecoder as P } from "@kinde/jwt-decoder";
import { isTokenExpired as M } from "../utils/jwt/validation.es.js";
import { getAccessToken as p } from "../utils/getAccessToken.es.js";
import { kindeClient as G } from "../session/kindeServerClient.es.js";
import { sessionManager as K } from "../session/sessionManager.es.js";
import { getSplitCookies as I } from "../utils/cookies/getSplitSerializedCookies.es.js";
import { getIdToken as V } from "../utils/getIdToken.es.js";
import { copyCookiesToRequest as v } from "../utils/copyCookiesToRequest.es.js";
import { getStandardCookieOptions as O } from "../utils/cookies/getStandardCookieOptions.es.js";
import { isPublicPathMatch as z } from "../utils/isPublicPathMatch.es.js";
const E = async (i, e, u) => {
  var C;
  const { pathname: a, search: f } = i.nextUrl;
  console.log("[KINDE-DEBUG] authMiddleware started", {
    pathname: a,
    search: f,
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  });
  const D = e == null ? void 0 : e.isReturnToCurrentPage, w = e == null ? void 0 : e.orgCode, R = (e == null ? void 0 : e.loginPage) || `${r.apiPath}/${_.login}`, B = `${r.apiPath}/kinde_callback`, S = `${r.apiPath}/${_.register}`, $ = `${r.apiPath}/${_.setup}`;
  if (R == a || B == a || S == a || $ == a)
    return l.next();
  let y = ["/_next", "/favicon.ico"];
  (e == null ? void 0 : e.publicPaths) !== void 0 && Array.isArray(e == null ? void 0 : e.publicPaths) && (y = e.publicPaths);
  const b = new URLSearchParams();
  w && b.set("org_code", w), D && b.set("post_login_redirect_url", a + f);
  const L = b.toString(), k = L ? `${R}?${L}` : R, T = z(
    a,
    y,
    r.isDebugMode
  );
  let h = await p(i), m = await V(i);
  if ((!h || !m) && !T)
    return r.isDebugMode && console.log(
      "authMiddleware: no access or id token, redirecting to login"
    ), l.redirect(
      new URL(k, (e == null ? void 0 : e.redirectURLBase) || r.redirectURL)
    );
  const N = await K(i);
  let n = null;
  const c = l.next();
  if (M(h, 20) || M(m, 20)) {
    console.log("[KINDE-DEBUG] Token expired, attempting refresh", {
      accessTokenExpired: M(h, 20),
      idTokenExpired: M(m, 20),
      pathname: a
    }), r.isDebugMode && console.log("authMiddleware: access token expired, refreshing");
    const o = (t) => {
      if (r.isDebugMode && console.error(t), console.error("[KINDE-DEBUG] Token refresh failed:", t), !T)
        return l.redirect(
          new URL(
            k,
            (e == null ? void 0 : e.redirectURLBase) || r.redirectURL
          )
        );
    };
    try {
      console.log("[KINDE-DEBUG] Calling kindeClient.refreshTokens"), n = await G.refreshTokens(N, !1), h = n.access_token, m = n.id_token, console.log("[KINDE-DEBUG] Token refresh succeeded", {
        hasAccessToken: !!n.access_token,
        hasIdToken: !!n.id_token,
        hasRefreshToken: !!n.refresh_token
      }), r.isDebugMode && console.log(
        "authMiddleware: tokens refreshed",
        !!n.access_token,
        !!n.id_token
      );
    } catch (t) {
      console.error("[KINDE-DEBUG] Token refresh error", {
        errorMessage: t instanceof Error ? t.message : String(t),
        errorStack: t instanceof Error ? t.stack : void 0,
        pathname: a
      });
      const d = o("authMiddleware: error refreshing tokens");
      if (d) return d;
    }
    try {
      let t = !0;
      const d = P(n.access_token);
      d && (t = ((C = d.ksp) == null ? void 0 : C.persistent) ?? !0), I(
        "access_token",
        n.access_token
      ).forEach((s) => {
        t || delete s.options.maxAge, c.cookies.set(s.name, s.value, s.options);
      }), I(
        "id_token",
        n.id_token
      ).forEach((s) => {
        t || delete s.options.maxAge, c.cookies.set(s.name, s.value, s.options);
      });
      const x = O();
      t || delete x.maxAge, c.cookies.set(
        "refresh_token",
        n.refresh_token,
        x
      ), v(i, c), r.isDebugMode && console.log("authMiddleware: tokens refreshed and cookies updated");
    } catch {
      const d = o(
        "authMiddleware: error settings new token in cookie"
      );
      if (d) return d;
    }
  }
  if (T)
    return c;
  let U = null, g = null;
  try {
    U = P(h);
  } catch {
    return r.isDebugMode && console.error(
      "authMiddleware: access token decode failed, redirecting to login"
    ), l.redirect(
      new URL(k, (e == null ? void 0 : e.redirectURLBase) || r.redirectURL)
    );
  }
  try {
    g = P(m);
  } catch {
    return r.isDebugMode && console.error(
      "authMiddleware: id token decode failed, redirecting to login"
    ), l.redirect(
      new URL(k, (e == null ? void 0 : e.redirectURLBase) || r.redirectURL)
    );
  }
  const A = e != null && e.isAuthorized ? e.isAuthorized({ req: i, token: U }) : !0;
  if (A && u) {
    r.isDebugMode && console.log("authMiddleware: invoking onSuccess callback");
    const o = await u({
      token: U,
      user: {
        family_name: g.family_name,
        given_name: g.given_name,
        email: g.email,
        id: g.sub,
        picture: g.picture
      }
    });
    return o instanceof l ? (r.isDebugMode && console.log(
      "authMiddleware: onSuccess callback returned a response, copying our cookies to it"
    ), c.cookies.getAll().forEach((t) => {
      o.cookies.set(t.name, t.value, {
        ...t
      });
    }), v(i, o), o) : (r.isDebugMode && console.log(
      "authMiddleware: onSuccess callback did not return a response, returning our response"
    ), c);
  }
  return A ? (r.isDebugMode && console.log(
    "authMiddleware: customValidationValid is true, returning response"
  ), c) : (r.isDebugMode && console.log("authMiddleware: default behaviour, redirecting to login"), l.redirect(
    new URL(k, (e == null ? void 0 : e.redirectURLBase) || r.redirectURL)
  ));
};
function ne(...i) {
  if (!i.length || i[0] instanceof Request)
    return E(...i);
  if (typeof i[0] == "function") {
    const u = i[0], a = i[1];
    return async (...f) => await E(f[0], a, async ({ token: D, user: w }) => (f[0].kindeAuth = { token: D, user: w }, await u(...f)));
  }
  const e = i[0];
  return async (...u) => await E(u[0], e);
}
export {
  ne as withAuth
};
