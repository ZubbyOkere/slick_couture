"use client";

import { WixContext } from "@/context/wixContext";
import { useContext } from "react";

export const useWixClient = () => {
  return useContext(WixContext);
};
