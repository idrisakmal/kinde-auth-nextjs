function r(e) {
  return !!(e.get("purpose") === "prefetch" || e.get("x-purpose") === "prefetch" || e.get("x-moz") === "prefetch");
}
export {
  r as isPreFetch
};
