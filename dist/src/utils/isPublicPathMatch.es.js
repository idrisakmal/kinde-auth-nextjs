function i(r, s, o = !1) {
  return s.some((t) => {
    try {
      return t instanceof RegExp ? t.test !== RegExp.prototype.test ? t.test(r) : new RegExp(t.source, t.flags).test(r) : t === "/" ? r === "/" : r.startsWith(t);
    } catch (e) {
      return o && console.error(
        "isPublicPathMatch: error evaluating publicPath pattern:",
        e
      ), !1;
    }
  });
}
export {
  i as isPublicPathMatch
};
