import { config as u } from "../../config/index.es.js";
import { flagDataTypeMap as c } from "../OldAuthProvider.es.js";
const a = (n) => (o, e, t) => {
  const s = n || {}, r = s && s[o] ? s[o] : null;
  if (!r && e === void 0)
    throw Error(
      `Flag ${o} was not found, and no default value has been provided`
    );
  if (t && (r != null && r.t) && t !== (r == null ? void 0 : r.t))
    throw Error(
      `Flag ${o} is of type ${c[r.t]} - requested type ${c[t]}`
    );
  return {
    code: o,
    type: c[(r == null ? void 0 : r.t) || t],
    value: (r == null ? void 0 : r.v) == null ? e : r == null ? void 0 : r.v,
    is_default: (r == null ? void 0 : r.v) == null,
    defaultValue: e
  };
}, g = (n) => (o, e) => {
  try {
    return a(n)(o, e, "b").value;
  } catch (t) {
    u.isDebugMode && console.error(t);
  }
}, v = (n) => (o, e) => {
  try {
    return a(n)(o, e, "s").value;
  } catch (t) {
    u.isDebugMode && console.error(t);
  }
}, F = (n) => (o, e) => {
  try {
    return a(n)(o, e, "i").value;
  } catch (t) {
    u.isDebugMode && console.error(t);
  }
};
export {
  g as getBooleanFlagFactory,
  a as getFlagFactory,
  F as getIntegerFlagFactory,
  v as getStringFlagFactory
};
