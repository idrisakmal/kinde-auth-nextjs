import g from "./removeUndefined.es.js";
const a = (s, o) => {
  const i = s.organization_properties || s["x-hasura-organization_properties"] || {}, n = o.organization_properties || o["x-hasura-organization_properties"] || {}, e = {
    ...i,
    ...n
  }, r = {};
  Object.keys(e).forEach((t) => {
    e[t].t === "b" || e[t].t, r[t] = e[t].v;
  });
  const _ = {
    // Keep the original keys for backwards compatibility
    // will be deprecated in the future
    city: r.kp_org_city,
    industry: r.kp_org_industry,
    postcode: r.kp_org_postcode,
    state_region: r.kp_org_state_region,
    street_address: r.kp_org_street_address,
    street_address_2: r.kp_org_street_address_2,
    ...r
  };
  return g(_);
}, d = (s, o) => {
  const i = o.org_code || o["x-hasura-org-code"], n = o.org_name || o["x-hasura-org-name"];
  return i ? {
    orgCode: i,
    orgName: n,
    properties: a(s, o)
  } : null;
};
export {
  d as generateOrganizationObject
};
