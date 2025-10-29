import { isAppRouter as p } from "../utils/isAppRouter.es.js";
import { callback as d } from "./callback.es.js";
import { createOrg as h } from "./createOrg.es.js";
import { login as g } from "./login.es.js";
import { logout as w } from "./logout.es.js";
import { setup as E } from "./setup.es.js";
import { health as y } from "./health.es.js";
import { portal as R } from "./portal.es.js";
import { register as I } from "./register.es.js";
import v from "../routerClients/AppRouterClient.es.js";
import A from "../routerClients/PagesRouterClient.es.js";
import { config as c, routes as i } from "../config/index.es.js";
const _ = {
  [i.createOrg]: h,
  [i.register]: I,
  [i.setup]: E,
  [i.login]: g,
  [i.logout]: w,
  [i.health]: y,
  [i.portal]: R,
  kinde_callback: d
}, m = (n) => _[n], j = (n, o, r) => {
  var e, t, a;
  if (!c.clientOptions.authDomain)
    throw new Error(
      "The environment variable 'KINDE_ISSUER_URL' is required. Set it in your .env file"
    );
  if (!c.clientOptions.clientId && !((e = r == null ? void 0 : r.config) != null && e.clientId))
    throw new Error(
      "env variable 'KINDE_CLIENT_ID' is not set and not passed in options"
    );
  if (!c.clientOptions.clientSecret && !((t = r == null ? void 0 : r.config) != null && t.clientSecret))
    throw new Error(
      "env variable 'KINDE_CLIENT_SECRET' is not set and not passed in options"
    );
  if (!c.clientOptions.redirectURL && !((a = r == null ? void 0 : r.config) != null && a.siteUrl))
    throw new Error(
      "env variable 'KINDE_SITE_URL' is not set and not passed in options"
    );
  return typeof n == "object" && typeof o == "string" ? f(
    n,
    { params: { kindeAuth: o } },
    r
  ) : async function(s, u) {
    return p(s) ? (
      // @ts-ignore
      f(s, u, r)
    ) : (
      // @ts-ignore
      b(s, u, n)
    );
  };
}, f = async (n, o, r) => {
  const { params: e } = o;
  let t = (await e).kindeAuth;
  t = Array.isArray(t) ? t[0] : t;
  const a = m(t);
  if (a) {
    const l = new v(n, o, r);
    return await l.createStore(), await a(l);
  } else
    return new Response("This page could not be found.", { status: 404 });
}, b = async (n, o, r) => {
  let {
    query: { kindeAuth: e }
  } = n;
  if (e = Array.isArray(e) ? e[0] : e, !e)
    throw Error("Please check your Kinde setup");
  const t = m(e);
  return t ? (
    // @ts-ignore
    await t(new A(n, o, r))
  ) : o.status(404).end();
};
export {
  j as default
};
