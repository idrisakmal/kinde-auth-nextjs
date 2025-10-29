import { config as t, routes as S } from "../config/index.es.js";
const R = async (r) => {
  console.log("[KINDE-DEBUG] Callback handler started", {
    url: r.getUrl(),
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  });
  const o = r.getSearchParam("error"), d = {
    error: o,
    code: r.getSearchParam("code") ? "present" : "missing",
    state: r.getSearchParam("state") ? "present" : "missing",
    scope: r.getSearchParam("scope")
  };
  if (console.log("[KINDE-DEBUG] Callback search params:", d), o) {
    if (console.log("[KINDE-DEBUG] Error parameter detected:", o), (o == null ? void 0 : o.toLowerCase()) === "login_link_expired") {
      const e = r.getSearchParam("reauth_state");
      if (e) {
        const m = atob(e);
        try {
          const n = JSON.parse(m);
          if (n) {
            const E = new URLSearchParams(n), g = new URL(
              `${t.redirectURL}${t.apiPath}/${S.login}`
            );
            return g.search = E.toString(), r.redirect(g.toString());
          }
        } catch (n) {
          throw new Error(
            n instanceof Error ? n.message : "Unknown Error parsing reauth state"
          );
        }
      }
      return;
    }
    return;
  }
  const i = await r.sessionManager.getSessionItem(
    "post_login_redirect_url"
  );
  i && await r.sessionManager.removeSessionItem(
    "post_login_redirect_url"
  );
  const s = i || t.postLoginRedirectURL;
  console.log("[KINDE-DEBUG] Before handleRedirectToApp", {
    postLoginRedirectURL: s,
    url: r.getUrl(),
    hasSessionManager: !!r.sessionManager,
    hasKindeClient: !!r.kindeClient
  });
  try {
    await r.kindeClient.handleRedirectToApp(
      r.sessionManager,
      r.getUrl()
    ), console.log("[KINDE-DEBUG] handleRedirectToApp succeeded");
  } catch (e) {
    return console.error("[KINDE-DEBUG] handleRedirectToApp FAILED", {
      errorMessage: e instanceof Error ? e.message : String(e),
      errorName: e instanceof Error ? e.name : "Unknown",
      errorStack: e instanceof Error ? e.stack : void 0,
      errorCause: e instanceof Error ? e.cause : void 0,
      errorStringified: JSON.stringify(e, Object.getOwnPropertyNames(e)),
      url: r.getUrl(),
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    }), t.isDebugMode && console.error("callback", e), e.message.includes("Expected: State not found") ? (console.error("[KINDE-DEBUG] State not found error detected"), r.json(
      {
        error: `Error: State not found.
To resolve this error please visit our docs https://docs.kinde.com/developer-tools/sdks/backend/nextjs-sdk/#state-not-found-error` + e.message
      },
      { status: 500 }
    )) : (console.error("[KINDE-DEBUG] Returning 500 error to client:", e.message), r.json({
      error: e.message,
      // Add debug info in response for easier troubleshooting
      debug: {
        errorType: e instanceof Error ? e.name : "Unknown",
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      }
    }, { status: 500 }));
  }
  const l = (() => {
    if (!t.postLoginAllowedURLRegex)
      return null;
    try {
      return new RegExp(t.postLoginAllowedURLRegex);
    } catch (e) {
      throw console.error("Invalid postLoginAllowedURLRegex pattern:", e), new Error(
        `Invalid postLoginAllowedURLRegex pattern: ${e.message}`
      );
    }
  })(), p = (e) => t.postLoginAllowedURLRegex ? l.test(e) : !0, a = await r.sessionManager.getSessionItem(
    "state"
  );
  if (console.log("[KINDE-DEBUG] Session state retrieved:", { hasState: !!a }), await r.sessionManager.removeSessionItem("state"), s && p(s)) {
    const e = s.startsWith("http") ? new URL(s) : new URL(s, r.clientConfig.siteUrl);
    return a && e.searchParams.set("state", a), console.log("[KINDE-DEBUG] Redirecting to postLoginRedirectURL:", e.toString()), r.redirect(e.toString());
  }
  const c = new URL(r.clientConfig.siteUrl);
  return a && c.searchParams.set("state", a), console.log("[KINDE-DEBUG] Redirecting to siteUrl:", c.toString()), r.redirect(c.toString());
};
export {
  R as callback
};
