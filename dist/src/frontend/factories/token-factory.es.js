const r = (e, o) => (t, c = "access_token") => {
  const n = c === "access_token" ? e : o;
  return n ? { name: t, value: n[t] } : null;
}, s = (e) => () => e, a = (e) => () => e, u = (e) => () => e, k = (e) => () => e;
export {
  r as getClaimFactory,
  s as getNextTypedAccessTokenFactory,
  u as getNextTypedIdTokenFactory,
  a as getRawAccessTokenFactory,
  k as getRawIdTokenFactory
};
