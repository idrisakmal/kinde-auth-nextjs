import { sessionManager as e } from "./sessionManager.es.js";
import { kindeClient as t } from "./kindeServerClient.es.js";
import { config as a } from "../config/index.es.js";
const g = (i, s) => async (o) => {
  try {
    const r = await t.getPermission(
      await e(i, s),
      o
    );
    return !r.isGranted && (await t.getClaimValue(
      await e(i, s),
      "x-hasura-permissions"
    )).includes(o) ? { isGranted: !0, orgCode: r.orgCode } : r;
  } catch (r) {
    return a.isDebugMode && console.error(r), null;
  }
};
export {
  g as getPermissionFactory
};
