import { Configuration as k, UsersApi as _, OAuthApi as P, SubscribersApi as I, OrganizationsApi as R, ConnectedAppsApi as S, FeatureFlagsApi as U, EnvironmentsApi as y, PermissionsApi as z, RolesApi as C, BusinessApi as L, IndustriesApi as T, TimezonesApi as v, ApplicationsApi as F, CallbacksApi as O, APIsApi as j } from "@kinde-oss/kinde-typescript-sdk";
import { config as n } from "./config/index.es.js";
import { sessionManager as x } from "./session/sessionManager.es.js";
const $ = async (i, t) => {
  let s = null;
  await (await x(i, t)).removeSessionItem("kinde_api_access_token"), s = (await (await fetch(`${n.issuerURL}/oauth2/token`, {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: n.clientID || "",
      client_secret: n.clientSecret || "",
      audience: n.issuerURL + "/api"
    })
  })).json()).access_token;
  const e = new k({
    basePath: n.issuerURL,
    accessToken: s,
    headers: { Accept: "application/json" }
  }), o = new _(e), c = new P(e), p = new I(e), a = new R(e), r = new S(e), A = new U(e), w = new y(e), l = new z(e), u = new C(e), m = new L(e), d = new T(e), g = new v(e), b = new F(e), f = new O(e), h = new j(e);
  return {
    usersApi: o,
    oauthApi: c,
    subscribersApi: p,
    organizationsApi: a,
    connectedAppsApi: r,
    featureFlagsApi: A,
    environmentsApi: w,
    permissionsApi: l,
    rolesApi: u,
    businessApi: m,
    industriesApi: d,
    timezonesApi: g,
    applicationsApi: b,
    callbacksApi: f,
    apisApi: h
  };
};
export {
  $ as createKindeManagementAPIClient
};
