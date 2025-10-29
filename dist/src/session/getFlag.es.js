import { sessionManager as c } from "./sessionManager.es.js";
import { FlagDataType as a } from "@kinde-oss/kinde-typescript-sdk";
import { kindeClient as d } from "./kindeServerClient.es.js";
const f = (o, i) => async (t, s, n) => {
  try {
    const r = await d.getClaimValue(
      await c(o, i),
      "feature_flags",
      "access_token"
    ), F = await d.getClaimValue(
      await c(o, i),
      "x-hasura-feature-flags",
      "access_token"
    ), e = {
      ...r,
      ...F
    }[t];
    if (!e && s === void 0)
      throw new Error(
        `Flag ${t} was not found, and no default value has been provided`
      );
    if (e != null && e.t && n && n !== (e == null ? void 0 : e.t))
      throw new Error(
        `Flag ${t} is of type ${a[e.t]}, expected type is ${a[n]}`
      );
    const u = (e == null ? void 0 : e.v) === void 0;
    return {
      is_default: u,
      value: (e == null ? void 0 : e.v) === void 0 ? s : e == null ? void 0 : e.v,
      code: t,
      type: u ? a[(e == null ? void 0 : e.t) ?? n] : !1,
      defaultValue: s
    };
  } catch (r) {
    if (r.message.includes("no default value has been provided"))
      throw r;
    return { value: s };
  }
};
export {
  f as getFlagFactory
};
