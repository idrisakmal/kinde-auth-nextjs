import { getFlagFactory as c } from "./getFlag.es.js";
import { config as g } from "../config/index.es.js";
const i = (t, o) => async (a, e) => {
  try {
    return (await c(t, o)(a, e, "s")).value;
  } catch (r) {
    return g.isDebugMode && console.error(r), null;
  }
};
export {
  i as getStringFlagFactory
};
