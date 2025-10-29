var s = Object.defineProperty;
var a = (t, r, o) => r in t ? s(t, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[r] = o;
var e = (t, r, o) => a(t, typeof r != "symbol" ? r + "" : r, o);
import "next/server";
class n {
  constructor() {
    /** @type {import('../types').KindeClientConfig} */
    e(this, "clientConfig", {});
    /** @type {import('../types').KindeClient} */
    e(this, "kindeClient", null);
    /** @type {URL} */
    e(this, "url");
    /** @type {import('@kinde-oss/kinde-typescript-sdk').SessionManager} */
    e(this, "sessionManager");
    /** @type {import('next').NextApiResponse | *} */
    e(this, "res");
    /** @type {import('next').NextApiRequest | NextResponse | *} */
    e(this, "req");
    /** @type {URLSearchParams} */
    e(this, "searchParams");
    if (this.constructor == n)
      throw new Error("Abstract classes can't be instantiated.");
  }
  /**
   *
   * @param {string} url
   * @returns
   */
  redirect(r) {
    throw new Error("Method 'redirect()' must be implemented.");
  }
  /**
   *
   * @param {object} data
   * @param {{status: number}} [status]
   * @returns
   */
  json(r, o) {
    throw new Error("Method 'json()' must be implemented.");
  }
  error() {
    throw new Error("Method 'error()' must be implemented.");
  }
  /**
   *
   * @returns {URL}
   */
  getUrl() {
    throw new Error("Method 'getUrl()' must be implemented.");
  }
  /**
   *
   * @param {string} key
   * @returns {string | null}
   */
  getSearchParam(r) {
    throw new Error("Method 'getSearchParam()' must be implemented.");
  }
  onError() {
    throw new Error("Method 'onError()' must be implemented.");
  }
}
export {
  n as default
};
