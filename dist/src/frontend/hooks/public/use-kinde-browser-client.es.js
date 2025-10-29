"use client";
import { useContext as o } from "react";
import { useProvidedKindeAuth as r } from "./use-provided-kinde-auth.es.js";
import { useProviderlessKindeAuth as t } from "./use-providerless-kinde-auth.es.js";
import "../../../../node_modules/.pnpm/@kinde-oss_kinde-auth-react@5.8.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@kinde-oss/kinde-auth-react/dist/index.es.js";
import { K as e } from "../../../../node_modules/.pnpm/@kinde-oss_kinde-auth-react@5.8.0_react-dom@19.2.0_react@19.2.0__react@19.2.0/node_modules/@kinde-oss/kinde-auth-react/dist/useKindeAuth-Cn3wmWvy.es.js";
const p = () => o(e) ? r() : t();
export {
  p as useKindeBrowserClient
};
