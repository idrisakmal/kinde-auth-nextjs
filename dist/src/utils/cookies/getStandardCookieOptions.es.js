import { config as o } from "../../config/index.es.js";
import { GLOBAL_COOKIE_OPTIONS as i, TWENTY_NINE_DAYS as m } from "../constants.es.js";
const t = () => ({
  maxAge: m,
  domain: o.cookieDomain ? o.cookieDomain : void 0,
  ...i
});
export {
  t as getStandardCookieOptions
};
