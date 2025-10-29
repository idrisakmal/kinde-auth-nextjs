"use client";
import "../../../../node_modules/.pnpm/@kinde-oss_kinde-auth-react@5.8.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@kinde-oss/kinde-auth-react/dist/index.es.js";
import { useState as n, useCallback as s, useEffect as i, useMemo as c } from "react";
import { DefaultKindeNextClientState as f } from "../../constants.es.js";
import { transformReactAuthStateToNextState as m, constructKindeClientState as u } from "../../factories/index.es.js";
import { getRefreshTokensServerAction as l } from "../../utils.es.js";
import { u as S } from "../../../../node_modules/.pnpm/@kinde-oss_kinde-auth-react@5.8.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@kinde-oss/kinde-auth-react/dist/useKindeAuth-Cn3wmWvy.es.js";
const K = () => {
  const [e, o] = n(
    f
  ), r = S(), a = s(async () => {
    const t = await m(r);
    o(t);
  }, [r]);
  return i(() => {
    a();
  }, [a]), {
    ...c(
      () => u(e),
      [e]
    ),
    refreshData: async () => {
      const t = await l();
      t ? await t() : console.warn(
        "[Kinde] refreshData is only available in Next.js App Router environments, version 14 or higher."
      );
    }
  };
};
export {
  K as useProvidedKindeAuth
};
