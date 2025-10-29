import { MAX_COOKIE_LENGTH as p } from "../constants.es.js";
import { getStandardCookieOptions as m } from "./getStandardCookieOptions.es.js";
import { splitString as e } from "../../../node_modules/.pnpm/@kinde-oss_kinde-auth-react@5.8.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@kinde-oss/kinde-auth-react/dist/utils.es.js";
const f = (t, r) => e(r, p).map((i, o) => ({
  name: t + (o === 0 ? "" : o),
  value: i,
  options: m()
}));
export {
  f as getSplitCookies
};
