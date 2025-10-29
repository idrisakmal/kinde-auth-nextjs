import { sessionManager as a } from "./sessionManager.es.js";
const n = (t, e) => async () => await (await a(t, e)).getSessionItem("id_token");
export {
  n as getIdTokenRawFactory
};
