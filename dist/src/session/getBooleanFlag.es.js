import { getFlagFactory as c } from "./getFlag.es.js";
import { config as l } from "../config/index.es.js";
const f = (o, t) => async (a, e) => {
  try {
    return (await c(o, t)(a, e, "b")).value;
  } catch (r) {
    return l.isDebugMode && console.error(r), null;
  }
};
export {
  f as getBooleanFlagFactory
};
