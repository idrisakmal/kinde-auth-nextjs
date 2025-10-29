import { validateToken as n } from "@kinde/jwt-validator";
import { config as o } from "../../config/index.es.js";
import { jwtDecoder as t } from "@kinde/jwt-decoder";
const d = (i, r = 0) => {
  try {
    const e = t(i);
    return e != null && e.exp ? e.exp < Math.floor(Date.now() / 1e3) + r : !0;
  } catch (e) {
    return console.error("Error checking authentication:", e), !0;
  }
}, u = async ({
  token: i
}) => {
  if (!i || typeof i != "string")
    return o.isDebugMode && console.error("validateToken: invalid token or token is missing"), !1;
  if (!(await n({
    token: i,
    domain: o.issuerURL
  })).valid)
    return o.isDebugMode && console.error("validateToken: invalid token"), !1;
  const e = t(i);
  return o.isDebugMode && console.log(
    `validateToken: token is valid - it will expire in ${e.exp - Date.now() / 1e3} seconds`
  ), e.iss !== o.issuerURL ? (o.isDebugMode && console.error("validateToken: invalid issuer"), !1) : !0;
};
export {
  d as isTokenExpired,
  u as validateToken
};
