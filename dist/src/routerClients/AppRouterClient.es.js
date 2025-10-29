import { createKindeServerClient as m } from "@kinde-oss/kinde-typescript-sdk";
import { cookies as R } from "next/headers";
import { NextResponse as h } from "next/server";
import { config as c } from "../config/index.es.js";
import { appRouterSessionManager as U } from "../session/sessionManager.es.js";
import s from "./RouterClient.es.js";
class P extends s {
  /**
   *
   * @param {import('next/server').NextRequest} req
   * @param {*} res
   * @param {{onError?: () => void; config: {audience?: string | string[], clientId?: string, clientSecret?: string, issuerURL?: string, siteUrl?: string, postLoginRedirectUrl?: string, postLogoutRedirectUrl?: string, scope?: string}}} options
   */
  constructor(r, t, e) {
    var a, l, i, n, u, f, g, d;
    super(), this.clientConfig = {
      ...c.clientOptions,
      framework: "Next.js:App",
      audience: ((a = e == null ? void 0 : e.config) == null ? void 0 : a.audience) || c.clientOptions.audience,
      authDomain: ((l = e == null ? void 0 : e.config) == null ? void 0 : l.issuerURL) || c.clientOptions.authDomain,
      clientId: ((i = e == null ? void 0 : e.config) == null ? void 0 : i.clientId) || c.clientOptions.clientId,
      clientSecret: ((n = e == null ? void 0 : e.config) == null ? void 0 : n.clientSecret) || c.clientOptions.clientSecret,
      logoutRedirectURL: ((u = e == null ? void 0 : e.config) == null ? void 0 : u.postLogoutRedirectUrl) || c.clientOptions.logoutRedirectURL,
      redirectURL: (f = e == null ? void 0 : e.config) != null && f.siteUrl ? `${(g = e == null ? void 0 : e.config) == null ? void 0 : g.siteUrl}${c.apiPath}/kinde_callback` : c.clientOptions.redirectURL,
      siteUrl: c.redirectURL || e.config.siteUrl,
      scope: ((d = e == null ? void 0 : e.config) == null ? void 0 : d.scope) || c.clientOptions.scope
    }, this.kindeClient = m(
      c.grantType,
      this.clientConfig
    ), this.url = new URL(r.url), this.req = r, this.searchParams = r.nextUrl.searchParams, this.onErrorCallback = e == null ? void 0 : e.onError;
  }
  async createStore() {
    this.sessionManager = U(await R());
  }
  /**
   *
   * @param {string} url
   * @returns
   */
  redirect(r) {
    return h.redirect(r);
  }
  /**
   *
   * @returns {URL}
   */
  getUrl() {
    return this.url;
  }
  /**
   *
   * @param {object} data
   * @param {{status: number}} status
   * @returns
   */
  json(r, t = { status: 200 }) {
    return h.json(r, t);
  }
  error() {
    return Response.error;
  }
  /**
   *
   * @param {string} key
   * @returns
   */
  getSearchParam(r) {
    return this.req.nextUrl.searchParams.get(r);
  }
  onError(r) {
    this.onErrorCallback && this.onErrorCallback(r);
  }
}
export {
  P as default
};
