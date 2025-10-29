import { sessionManager as n } from "./sessionManager.es.js";
import { kindeClient as a } from "./kindeServerClient.es.js";
import { config as m } from "../config/index.es.js";
const f = (i, o) => async (e, t) => {
  try {
    return await a.getClaim(
      await n(i, o),
      e,
      t
    );
  } catch (r) {
    return m.isDebugMode && console.error(r), null;
  }
};
export {
  f as getClaimFactory
};
