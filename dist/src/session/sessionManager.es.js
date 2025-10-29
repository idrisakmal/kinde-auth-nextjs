import { cookies as m } from "next/headers";
import { isAppRouter as h } from "../utils/isAppRouter.es.js";
import { config as r } from "../config/index.es.js";
import { COOKIE_LIST as S, GLOBAL_COOKIE_OPTIONS as d, MAX_COOKIE_LENGTH as D, TWENTY_NINE_DAYS as u } from "../utils/constants.es.js";
import { splitString as k } from "../../node_modules/.pnpm/@kinde-oss_kinde-auth-react@5.8.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@kinde-oss/kinde-auth-react/dist/utils.es.js";
import { destr as E } from "destr";
import * as g from "cookie";
const G = async (s, i, l = { persistent: !0 }) => {
  const { persistent: t = !0 } = l;
  if (!s) {
    const e = await m();
    return p(e, t);
  }
  if (h(s)) {
    const e = await m(s, i);
    return p(e, t);
  } else
    return I(s, i, t);
}, p = (s, i = !0) => {
  const l = { persistent: i };
  return {
    get persistent() {
      return l.persistent;
    },
    set persistent(t) {
      l.persistent = t;
    },
    /**
     *
     * @param {string} itemKey
     * @returns {Promise<string | object | null>}
     */
    getSessionItem: (t) => {
      console.log("[KINDE-DEBUG] getSessionItem called", { itemKey: t });
      const e = s.get(t);
      if (!e)
        return console.log("[KINDE-DEBUG] getSessionItem not found", { itemKey: t }), null;
      let n = "";
      try {
        let o = 0, a = `${String(t)}${o === 0 ? "" : o}`, c = 0;
        for (; s.has(a); )
          n += s.get(a).value, o++, c++, a = `${String(t)}${o === 0 ? "" : o}`;
        return console.log("[KINDE-DEBUG] getSessionItem found", {
          itemKey: t,
          chunkCount: c,
          valueLength: n.length
        }), E(n);
      } catch (o) {
        return console.error("[KINDE-DEBUG] Failed to parse session item", {
          itemKey: t,
          error: o instanceof Error ? o.message : String(o)
        }), r.isDebugMode && console.error("Failed to parse session item app router:", o), n || e.value;
      }
    },
    /**
     *
     * @param {string} itemKey
     * @param {any} itemValue
     * @returns {Promise<void>}
     */
    setSessionItem: (t, e) => {
      if (console.log("[KINDE-DEBUG] setSessionItem called", {
        itemKey: t,
        hasValue: e !== void 0,
        valueType: typeof e
      }), s.getAll().map((n) => n.name).forEach((n) => {
        n.startsWith(`${String(t)}`) && s.delete(n);
      }), e !== void 0) {
        const n = typeof e == "object" ? JSON.stringify(e) : e, o = k(n, D);
        console.log("[KINDE-DEBUG] setSessionItem storing", {
          itemKey: t,
          chunks: o.length,
          totalLength: n.length
        }), o.forEach(
          (a, c) => {
            s.set(t + (c === 0 ? "" : c), a, {
              maxAge: l.persistent ? u : void 0,
              domain: r.cookieDomain ? r.cookieDomain : void 0,
              ...d
            });
          }
        );
      }
    },
    /**
     *
     * @param {string} itemKey
     * @returns {Promise<void>}
     */
    removeSessionItem: (t) => {
      s.getAll().map((e) => e.name).forEach((e) => {
        e.startsWith(`${String(t)}`) && s.delete(e);
      });
    },
    /**
     * @returns {Promise<void>}
     */
    destroySession: () => {
      s.getAll().map((t) => t.name).forEach((t) => {
        S.some((e) => t.startsWith(e)) && s.set(t, "", {
          domain: r.cookieDomain ? r.cookieDomain : void 0,
          maxAge: 0,
          ...d
        });
      });
    }
  };
}, I = (s, i, l = !0) => {
  const t = { persistent: l };
  return {
    get persistent() {
      return t.persistent;
    },
    set persistent(e) {
      t.persistent = e;
    },
    /**
     *
     * @param {string} itemKey
     * @returns {Promise<string | undefined>}
     */
    getSessionItem: (e) => {
      const n = s.cookies[e];
      if (n)
        try {
          let o = "", a = 0, c = `${String(e)}${a === 0 ? "" : a}`;
          for (; s.cookies[c]; )
            o += s.cookies[c], a++, c = `${String(e)}${a === 0 ? "" : a}`;
          try {
            const f = JSON.parse(o);
            if (typeof f == "object")
              return f;
          } catch (f) {
            r.isDebugMode && console.error("Failed to parse session item:", f);
          }
          return o;
        } catch (o) {
          return r.isDebugMode && console.error("Failed to read session item:", o), n;
        }
    },
    /**
     *
     * @param {string} itemKey
     * @param {any} itemValue
     * @returns {Promise<void>}
     */
    setSessionItem: async (e, n) => {
      let o = (i == null ? void 0 : i.getHeader("Set-Cookie")) || [];
      if (Array.isArray(o) || (o = [o.toString()]), s.cookies[e] !== void 0 && o.push(
        g.serialize(e, "", {
          domain: r.cookieDomain ? r.cookieDomain : void 0,
          maxAge: -1,
          ...d
        })
      ), n !== void 0) {
        const a = typeof n == "object" ? JSON.stringify(n) : n;
        i == null || i.setHeader(
          "Set-Cookie",
          [
            ...o.filter((c) => !c.startsWith(`${e}`)) || [],
            ...k(a, D).map(
              (c, f) => g.serialize(
                e + (f === 0 ? "" : f),
                c,
                {
                  domain: r.cookieDomain ? r.cookieDomain : void 0,
                  ...d,
                  maxAge: t.persistent ? u : void 0
                }
              )
            )
          ],
          {
            domain: r.cookieDomain ? r.cookieDomain : void 0,
            ...d,
            maxAge: t.persistent ? u : void 0
          }
        );
      }
    },
    /**
     *
     * @param {string} itemKey
     * @returns {Promise<void>}
     */
    removeSessionItem: async (e) => {
      let n = (i == null ? void 0 : i.getHeader("Set-Cookie")) || [];
      Array.isArray(n) || (n = [n.toString()]), s.cookies[e] !== void 0 && n.push(
        g.serialize(e, "", {
          domain: r.cookieDomain ? r.cookieDomain : void 0,
          maxAge: -1,
          ...d
        })
      ), i == null || i.setHeader("Set-Cookie", [
        ...n.map((o) => o.startsWith(`${e}`) ? g.serialize(o.split("=")[0], "", {
          domain: r.cookieDomain ? r.cookieDomain : void 0,
          maxAge: -1,
          ...d
        }) : o)
      ]);
    },
    destroySession: async () => {
      let e = (i == null ? void 0 : i.getHeader("Set-Cookie")) || [];
      Array.isArray(e) || (e = [e.toString()]), i == null || i.setHeader("Set-Cookie", [
        ...Object.keys(s.cookies).map((n) => {
          if (S.some((o) => n.startsWith(o)))
            return g.serialize(n.split("=")[0], "", {
              domain: r.cookieDomain ? r.cookieDomain : void 0,
              maxAge: -1,
              ...d
            });
        })
      ]);
    }
  };
};
export {
  p as appRouterSessionManager,
  I as pageRouterSessionManager,
  G as sessionManager
};
