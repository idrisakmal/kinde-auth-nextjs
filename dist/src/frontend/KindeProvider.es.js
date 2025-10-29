"use client";
import { jsx as n } from "react/jsx-runtime";
import { KindeProvider as d } from "../../node_modules/.pnpm/@kinde-oss_kinde-auth-react@5.8.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@kinde-oss/kinde-auth-react/dist/index.es.js";
import { useSessionSync as s } from "./hooks/internal/use-session-sync.es.js";
import { clientStorage as l } from "./store.es.js";
import { storageSettings as m } from "../../node_modules/.pnpm/@kinde-oss_kinde-auth-react@5.8.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@kinde-oss/kinde-auth-react/dist/utils.es.js";
const h = ({
  children: o,
  waitForInitialLoad: t
}) => {
  const { loading: e, config: r, refreshHandler: i } = s();
  return m.onRefreshHandler = i, e && t ? null : !r && !e ? (console.error("[KindeProvider] Failed to fetch config"), null) : /* @__PURE__ */ n(
    d,
    {
      clientId: (r == null ? void 0 : r.clientId) ?? "",
      domain: (r == null ? void 0 : r.issuerUrl) ?? "",
      redirectUri: (r == null ? void 0 : r.redirectUrl) ?? "",
      store: l,
      forceChildrenRender: !0,
      children: o
    }
  );
};
export {
  h as KindeProvider
};
