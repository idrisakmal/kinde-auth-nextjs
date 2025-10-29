import w from "../session/index.es.js";
import { redirect as d } from "next/navigation";
import { NextResponse as l } from "next/server";
import { routes as f } from "../config/index.es.js";
const p = ({ postLoginRedirectURL: e, orgCode: s }) => {
  if (e && typeof e != "string")
    throw new TypeError("postLoginRedirectURL must be a string");
  if (s && typeof s != "string")
    throw new TypeError("orgCode must be a string");
  const m = new URLSearchParams();
  let t = {};
  const n = process.env.KINDE_SITE_URL;
  if (!n)
    throw new Error("KINDE_SITE_URL environment variable is not configured");
  if (s != null && (t.org_code = s), e != null) {
    e != null && e.startsWith("/") && (e = `${n}${e}`);
    try {
      new URL(e);
    } catch {
      throw new Error(`Invalid postLoginRedirectURL: ${e}`);
    }
    t.post_login_redirect_url = e;
  }
  for (const i in t) m.append(i, t[i]);
  const u = new URL(
    `${n}/api/auth/${f.login}?${m.toString()}`
  );
  d(u.toString());
}, E = (e, s = {}) => async (m) => {
  const { isAuthenticated: t, getPermission: n, getPermissions: u, getRoles: i } = w();
  if (await t() || p(s), s.roles) {
    const r = await i();
    r || p(s);
    const o = new Set(r.map((a) => a.name));
    s.roles.some((a) => o.has(a)) || p(s);
  }
  if (typeof s.permissions == "string" && (await n(s.permissions) || p(s)), Array.isArray(s.permissions)) {
    const r = await u();
    s.permissions.some(
      (o) => r.includes(o)
    ) || p(s);
  }
  return e(m);
}, I = (e, s) => async (m) => {
  const { isAuthenticated: t, getPermission: n, getPermissions: u, getRoles: i } = w();
  try {
    if (!await t())
      return l.json({ statusCode: 401, message: "Unauthorized" });
    if (s.roles) {
      const r = await i();
      if (!r)
        return l.json({ statusCode: 401, message: "Unauthorized" });
      const o = new Set(r.map((a) => a.name));
      if (!s.roles.some((a) => o.has(a)))
        return l.json({ statusCode: 401, message: "Unauthorized" });
    }
    if (typeof s.permissions == "string" && !await n(s.permissions))
      return l.json({ statusCode: 403, message: "Forbidden" });
    if (Array.isArray(s.permissions)) {
      const r = await u();
      if (!s.permissions.some(
        (o) => r.includes(o)
      ))
        return l.json({ statusCode: 403, message: "Forbidden" });
    }
  } catch (h) {
    return console.error("Error protecting page", h), null;
  }
  return e(m);
};
export {
  I as protectApi,
  E as protectPage
};
