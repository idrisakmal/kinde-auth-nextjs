const e = 2505600, t = {
  sameSite: "lax",
  httpOnly: !0,
  secure: process.env.NODE_ENV === "production",
  path: "/"
}, _ = [
  "ac-state-key",
  "id_token_payload",
  "id_token",
  "access_token_payload",
  "access_token",
  "user",
  "refresh_token",
  "post_login_redirect_url"
], o = 3e3;
export {
  _ as COOKIE_LIST,
  t as GLOBAL_COOKIE_OPTIONS,
  o as MAX_COOKIE_LENGTH,
  e as TWENTY_NINE_DAYS
};
