import { removeTrailingSlash as e } from "../utils/removeTrailingSlash.es.js";
import c from "../../package.json.es.js";
const i = {
  accessToken: null,
  idToken: null,
  isAuthenticated: !1,
  isLoading: !0,
  organization: null,
  permissions: [],
  user: null,
  userOrganizations: [],
  getAccessToken: () => null,
  getBooleanFlag: () => null,
  getClaim: () => null,
  getFlag: () => null,
  getIdToken: () => null,
  getIntegerFlag: () => null,
  getOrganization: () => null,
  getPermission: () => null,
  getPermissions: () => [],
  getStringFlag: () => null,
  getToken: () => null,
  getUser: () => null,
  getUserOrganizations: () => null,
  refreshData: () => null
}, T = "pkce-verifier", t = e(
  process.env.KINDE_SITE_URL || process.env.NEXT_PUBLIC_KINDE_SITE_URL
), a = process.env.KINDE_POST_LOGIN_ALLOWED_URL_REGEX, _ = e(process.env.NEXT_PUBLIC_KINDE_AUTH_API_PATH) || e(process.env.KINDE_AUTH_API_PATH) || "/api/auth", R = e(process.env.KINDE_POST_LOGIN_REDIRECT_URL) || e(process.env.KINDE_POST_LOGIN_URL_REDIRECT_URL), E = e(
  process.env.KINDE_POST_LOGOUT_REDIRECT_URL
), r = e(
  process.env.KINDE_ISSUER_URL || process.env.NEXT_PUBLIC_KINDE_ISSUER_URL
), I = process.env.KINDE_CLIENT_ID || process.env.NEXT_PUBLIC_KINDE_CLIENT_ID, l = process.env.KINDE_CLIENT_SECRET, s = process.env.KINDE_AUDIENCE, D = e(
  process.env.KINDE_COOKIE_DOMAIN
), N = process.env.KINDE_SCOPE || "openid profile email offline", U = process.env.KINDE_DEBUG_MODE === "true", u = {
  isDebugMode: U,
  apiPath: _,
  initialState: i,
  SESSION_PREFIX: T,
  redirectURL: t,
  postLoginRedirectURL: R,
  postLoginAllowedURLRegex: a,
  issuerURL: r,
  clientID: I,
  clientSecret: l,
  postLogoutRedirectURL: E,
  audience: s ? s.split(" ") : "",
  cookieDomain: D,
  responseType: "code",
  codeChallengeMethod: "S256",
  redirectRoutes: {
    callback: `${_}/kinde_callback`
  },
  issuerRoutes: {
    logout: "/logout",
    login: "/oauth2/auth",
    register: "/oauth2/auth",
    token: "/oauth2/token",
    profile: "/oauth2/v2/user_profile"
  },
  clientOptions: {
    audience: s ? s.split(" ") : "",
    authDomain: r || "",
    clientId: I || "",
    clientSecret: l || "",
    logoutRedirectURL: E || "",
    redirectURL: `${t}${_}/kinde_callback`,
    frameworkVersion: c.version,
    scope: N
  },
  grantType: "AUTHORIZATION_CODE"
}, o = (n) => n && /^[a-zA-Z0-9_-]+$/.test(n) ? n : null, O = {
  login: o(process.env.KINDE_AUTH_LOGIN_ROUTE) || "login",
  logout: o(process.env.KINDE_AUTH_LOGOUT_ROUTE) || "logout",
  register: o(process.env.KINDE_AUTH_REGISTER_ROUTE) || "register",
  createOrg: o(process.env.KINDE_AUTH_CREATEORG_ROUTE) || "create_org",
  health: o(process.env.KINDE_AUTH_HEALTH_ROUTE) || "health",
  setup: o(process.env.KINDE_AUTH_SETUP_ROUTE) || "setup",
  portal: o(process.env.KINDE_AUTH_PORTAL_ROUTE) || "portal"
};
export {
  u as config,
  O as routes
};
