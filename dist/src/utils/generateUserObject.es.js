import h from "./removeUndefined.es.js";
const U = (e, v) => {
  const c = {
    id: e.sub,
    email: e.email,
    family_name: e.family_name,
    given_name: e.given_name,
    picture: e.picture,
    username: e.preferred_username,
    phone_number: e.phone_number
  };
  let l = c;
  const k = e.user_properties || e["x-hasura-user_properties"] || {}, y = v.user_properties || v["x-hasura-user_properties"] || {}, r = { ...k, ...y };
  if (r) {
    const {
      kp_usr_city: s,
      kp_usr_industry: _,
      kp_usr_is_marketing_opt_in: t,
      kp_usr_job_title: p,
      kp_usr_middle_name: u,
      kp_usr_postcode: n,
      kp_usr_salutation: i,
      kp_usr_state_region: a,
      kp_usr_street_address: o,
      kp_usr_street_address_2: m
    } = r, x = Object.keys(r).reduce(
      (d, g) => {
        var f;
        return d[g] = (f = r[g]) == null ? void 0 : f.v, d;
      },
      {}
    );
    l = {
      ...h(c),
      properties: h({
        city: s == null ? void 0 : s.v,
        industry: _ == null ? void 0 : _.v,
        is_marketing_opt_in: t == null ? void 0 : t.v,
        job_title: p == null ? void 0 : p.v,
        middle_name: u == null ? void 0 : u.v,
        postcode: n == null ? void 0 : n.v,
        salutation: i == null ? void 0 : i.v,
        state_region: a == null ? void 0 : a.v,
        street_address: o == null ? void 0 : o.v,
        street_address_2: m == null ? void 0 : m.v,
        ...x
      })
    };
  }
  return l;
};
export {
  U as generateUserObject
};
