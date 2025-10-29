import { config as n, routes as u } from "../config/index.es.js";
const d = async () => {
  try {
    const { refreshTokensServerAction: e } = await import("../session/refreshTokensServerAction.es.js");
    return e;
  } catch {
    return null;
  }
}, f = async () => {
  const e = `${n.apiPath}/${u.setup}`;
  let t;
  try {
    t = await fetch(e);
  } catch (o) {
    return n.isDebugMode && console.error("Failed to fetch Kinde state", o), { success: !1, error: "Failed to fetch Kinde state", env: null };
  }
  let c;
  try {
    c = await t.json();
  } catch (o) {
    return n.isDebugMode && console.error("Failed to parse Kinde state response", o), {
      success: !1,
      error: "Failed to parse Kinde state response",
      env: null
    };
  }
  const { message: s, error: a, env: r, ...i } = c;
  if (!t.ok)
    return {
      success: !1,
      error: a || s || "Failed to fetch Kinde state",
      env: r ?? null
    };
  switch (s) {
    case "OK":
      return { success: !0, kindeState: i, env: r };
    case "NOT_LOGGED_IN":
      return { success: !1, error: "Not logged in", env: r };
    default:
      return {
        success: !1,
        error: `${s}: ${a || "An error occurred"}`,
        env: r
      };
  }
};
export {
  f as fetchKindeState,
  d as getRefreshTokensServerAction
};
