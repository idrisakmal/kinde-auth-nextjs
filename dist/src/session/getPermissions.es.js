import { sessionManager as o } from "./sessionManager.es.js";
import { kindeClient as a } from "./kindeServerClient.es.js";
import { config as e } from "../config/index.es.js";
const c = (i, r) => async () => {
  try {
    const s = await a.getPermissions(
      await o(i, r)
    );
    return s.permissions ? s : {
      permissions: await a.getClaimValue(
        await o(i, r),
        "x-hasura-permissions"
      ),
      orgCode: await a.getClaimValue(
        await o(i, r),
        "x-hasura-org-code"
      )
    };
  } catch (s) {
    return e.isDebugMode && console.error(s), null;
  }
};
export {
  c as getPermissionsFactory
};
