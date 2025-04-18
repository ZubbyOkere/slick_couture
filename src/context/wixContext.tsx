"use client";

import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import Cookies from "js-cookie";
import { createContext, ReactNode } from "react";

const refreshToken = JSON.parse(Cookies.get("refreshToken") || "{}");

export const wixClient = createClient({
  modules: {
    products,
    collections,
  },
  auth: OAuthStrategy({
    clientId: "<YOUR_CLIENT_ID>",
    tokens: {
      refreshToken,
      accessToken: { value: "", expiresAt: 0 },
    },
  }),
});

export type WixClient = typeof wixClient;

export const WixContext = createContext<WixClient>(wixClient);

export const WixClientProvider = ({ children }: { children: ReactNode }) => {
  return (
    <WixContext.Provider value={wixClient}>{children}</WixContext.Provider>
  );
};
