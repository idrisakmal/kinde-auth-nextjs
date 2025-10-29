import { createKindeServerClient as h } from "@kinde-oss/kinde-typescript-sdk";
import { config as t } from "../config/index.es.js";
import { pageRouterSessionManager as d } from "../session/sessionManager.es.js";
import f from "./RouterClient.es.js";
class P extends f {
  /**
   *
   * @param {import('next').NextApiRequest} req
   * @param {import('next').NextApiResponse} res
   * @param {{onError?: () => void; config: {audience?: string | string[], clientId?: string, clientSecret?: string, issuerURL?: string, siteUrl?: string, postLoginRedirectUrl?: string, postLogoutRedirectUrl?: string, scope?: string}}} options
   */
  constructor(r, c, e) {
    var i, l, a, u, n, s, g;
    super(), r.url.split("/").pop(), this.clientConfig = {
      ...t.clientOptions,
      framework: "Next.js:Pages",
      audience: ((i = e == null ? void 0 : e.config) == null ? void 0 : i.audience) || t.clientOptions.audience,
      authDomain: ((l = e == null ? void 0 : e.config) == null ? void 0 : l.issuerURL) || t.clientOptions.authDomain,
      clientId: ((a = e == null ? void 0 : e.config) == null ? void 0 : a.clientId) || t.clientOptions.clientId,
      clientSecret: ((u = e == null ? void 0 : e.config) == null ? void 0 : u.clientSecret) || t.clientOptions.clientSecret,
      logoutRedirectURL: ((n = e == null ? void 0 : e.config) == null ? void 0 : n.postLogoutRedirectUrl) || t.clientOptions.logoutRedirectURL,
      redirectURL: (s = e == null ? void 0 : e.config) != null && s.siteUrl ? `${(g = e == null ? void 0 : e.config) == null ? void 0 : g.siteUrl}${t.apiPath}/kinde_callback` : t.clientOptions.redirectURL,
      siteUrl: t.redirectURL || e.config.siteUrl
    }, this.kindeClient = h(
      t.grantType,
      this.clientConfig
    ), this.url = new URL(this.clientConfig.siteUrl + r.url), this.res = c, this.req = r, this.searchParams = this.url.searchParams, this.sessionManager = d(r, c);
  }
  /**
   *
   * @param {string} url
   * @returns
   */
  redirect(r) {
    return this.res.redirect(r);
  }
  getUrl() {
    return this.url;
  }
  /**
   *
   * @param {object} data
   * @param {{status: number}} status
   * @returns
   */
  json(r, c = { status: 200 }) {
    return this.res.status(c.status).json(r);
  }
  /**
   *
   * @param {string} key
   * @returns {string | null}
   */
  getSearchParam(r) {
    return this.url.searchParams.get(r);
  }
}
export {
  P as default
};
