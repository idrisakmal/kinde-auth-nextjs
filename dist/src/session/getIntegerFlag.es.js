import { getFlagFactory as c } from "./getFlag.es.js";
import { config as g } from "../config/index.es.js";
const i = (t, o) => async (e, a) => {
  try {
    return (await c(t, o)(e, a, "i")).value;
  } catch (r) {
    return g.isDebugMode && console.error(r), null;
  }
};
export {
  i as getIntegerFlagFactory
};
