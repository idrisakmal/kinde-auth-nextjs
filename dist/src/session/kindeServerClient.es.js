import { createKindeServerClient as e, GrantType as t } from "@kinde-oss/kinde-typescript-sdk";
import { config as i } from "../config/index.es.js";
const o = e(
  t.AUTHORIZATION_CODE,
  i.clientOptions
);
export {
  o as kindeClient
};
