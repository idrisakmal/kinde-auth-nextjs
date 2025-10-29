import { sessionManager as e } from "./sessionManager.es.js";
import { kindeClient as t } from "./kindeServerClient.es.js";
import { config as s } from "../config/index.es.js";
const c = (o, a) => async () => {
  try {
    const r = await t.getClaimValue(
      await e(o, a),
      "roles"
    );
    return r || await t.getClaimValue(
      await e(o, a),
      "x-hasura-roles"
    );
  } catch (r) {
    return s.isDebugMode && console.error(r), null;
  }
};
export {
  c as getRolesFactory
};
