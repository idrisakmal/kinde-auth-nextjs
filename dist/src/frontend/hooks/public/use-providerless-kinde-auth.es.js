"use client";
import { constructKindeClientState as n } from "../../factories/index.es.js";
import { getRefreshTokensServerAction as o } from "../../utils.es.js";
import { useSessionSync as a } from "../internal/use-session-sync.es.js";
const p = (i = process.env.NEXT_PUBLIC_KINDE_AUTH_API_PATH || process.env.KINDE_AUTH_API_PATH || "/api/auth") => {
  const { getFetchedState: t, refetch: r } = a(!1), s = async () => {
    const e = await o();
    e ? (await e(), await r()) : console.warn(
      "[Kinde] refreshData is only available in Next.js App Router environments, version 14 or higher."
    );
  };
  return {
    ...n(t()),
    refreshData: s
  };
};
export {
  p as useProviderlessKindeAuth
};
