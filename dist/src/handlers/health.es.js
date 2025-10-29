import { config as e } from "../config/index.es.js";
import { NextResponse as t } from "next/server";
import { validateClientSecret as o } from "@kinde-oss/kinde-typescript-sdk";
const n = async () => t.json({
  apiPath: e.apiPath,
  redirectURL: e.clientOptions.redirectURL,
  postLoginRedirectURL: e.postLoginRedirectURL,
  issuerURL: e.issuerURL,
  clientID: e.clientID,
  clientSecret: o(e.clientSecret) ? "Set correctly" : "Not set correctly",
  postLogoutRedirectURL: e.postLogoutRedirectURL,
  audience: e.audience,
  cookieDomain: e.cookieDomain,
  logoutRedirectURL: e.clientOptions.logoutRedirectURL
});
export {
  n as health
};
