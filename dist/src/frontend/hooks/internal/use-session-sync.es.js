"use client";
import { useState as S, useCallback as o, useRef as x, useEffect as p } from "react";
import { useSyncState as D } from "./use-sync-state.es.js";
import { fetchKindeState as m } from "../../utils.es.js";
import { DefaultKindeNextClientState as T } from "../../constants.es.js";
import { clientStorage as w } from "../../store.es.js";
import { StorageKeys as r, setRefreshTimer as C, getDecodedToken as K } from "../../../../node_modules/.pnpm/@kinde-oss_kinde-auth-react@5.8.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@kinde-oss/kinde-auth-react/dist/utils.es.js";
import { config as L } from "../../../config/index.es.js";
const b = async () => {
  const s = await K("accessToken");
  return s ? s.exp - Math.floor(Date.now() / 1e3) : null;
}, Z = (s = !0) => {
  const [g, i] = S(!0), [h, u] = S(null), [y, t] = D(
    T
  ), n = o(
    async (e) => {
      await w.destroySession(), t({
        ...T,
        isLoading: !1,
        error: e
      });
    },
    [t]
  ), f = x(
    null
  ), a = o(
    async (e) => {
      const { accessTokenEncoded: R, idTokenRaw: E } = e;
      if (await w.setItems({
        [r.accessToken]: R,
        [r.idToken]: E
      }), s) {
        const l = await b(), k = f.current;
        k && l !== null && C(l, k);
      }
      t({
        ...e,
        isLoading: !1,
        error: null
      });
    },
    [t, s]
  ), c = o(async () => {
    const e = await m();
    return e.success ? (await a(e.kindeState), {
      success: !0,
      idToken: e.kindeState.idTokenRaw,
      accessToken: e.kindeState.accessTokenEncoded
    }) : (await n("User is unauthenticated or refresh failed"), {
      success: !1,
      error: "User is unauthenticated or refresh failed"
    });
  }, [n, a]);
  p(() => {
    f.current = c;
  }, [c]);
  const d = o(async () => {
    const e = await m();
    return e.success === !1 ? (L.isDebugMode && console.log("setupResponse unsuccessful", e), await n(e.error), u(e.env), i(!1), {
      success: !1,
      error: e.error
    }) : (await a(e.kindeState), u(e.env), i(!1), {
      success: !0,
      [r.accessToken]: e.kindeState.accessTokenEncoded,
      [r.idToken]: e.kindeState.idTokenRaw
    });
  }, [n, a]);
  return p(() => {
    d();
  }, []), {
    config: h,
    getFetchedState: y,
    loading: g,
    refetch: d,
    refreshHandler: c
  };
};
export {
  b as calculateExpirySeconds,
  Z as useSessionSync
};
