import { generateOrganizationObject as n } from "../../utils/generateOrganizationObject.es.js";
const a = (r, t) => () => !r || !t ? null : n(r, t);
export {
  a as getOrganizationFactory
};
