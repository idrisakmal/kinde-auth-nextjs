import { sessionManager as t } from "./sessionManager.es.js";
const o = (e, s) => async () => await (await t(e, s)).getSessionItem("access_token");
export {
  o as getAccessTokenRawFactory
};
