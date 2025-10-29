"use client";
import "react/jsx-runtime";
import { config as t } from "../config/index.es.js";
import { createContext as o, useContext as e } from "react";
const s = {
  s: "string",
  i: "integer",
  b: "boolean"
}, n = o({
  ...t.initialState
}), p = () => e(n);
export {
  s as flagDataTypeMap,
  p as useKindeAuth
};
