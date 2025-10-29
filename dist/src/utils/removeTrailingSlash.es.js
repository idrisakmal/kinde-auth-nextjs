function n(e) {
  if (e != null)
    return e = e.trim(), e.endsWith("/") && (e = e.slice(0, -1)), e;
}
export {
  n as removeTrailingSlash
};
