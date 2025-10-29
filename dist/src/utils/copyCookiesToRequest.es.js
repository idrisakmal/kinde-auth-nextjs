import { ResponseCookies as n, RequestCookies as i } from "next/dist/server/web/spec-extension/cookies";
import { NextResponse as m } from "next/server";
const w = (t, o) => {
  const d = new n(o.headers), r = new Headers(t.headers), a = new i(r);
  d.getAll().forEach((e) => a.set(e)), m.next({ request: { headers: r } }).headers.forEach((e, s) => {
    (s === "x-middleware-override-headers" || s.startsWith("x-middleware-request-")) && o.headers.set(s, e);
  });
};
export {
  w as copyCookiesToRequest
};
