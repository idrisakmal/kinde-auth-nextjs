"use server";
import { kindeClient as n } from "./kindeServerClient.es.js";
import { sessionManager as o } from "./sessionManager.es.js";
async function i() {
  const e = await o();
  await n.refreshTokens(e);
}
export {
  i as refreshTokensServerAction
};
