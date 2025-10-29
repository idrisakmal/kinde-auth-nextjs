import { useState as a } from "react";
const o = (r) => {
  const [t, n] = a({
    current: r
  });
  return [() => t.current, (e) => {
    n({ current: e }), t.current = e;
  }];
};
export {
  o as useSyncState
};
