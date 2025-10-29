"use server";
"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const n=require("./kindeServerClient.cjs.js"),r=require("./sessionManager.cjs.js");async function s(){const e=await r.sessionManager();await n.kindeClient.refreshTokens(e)}exports.refreshTokensServerAction=s;
