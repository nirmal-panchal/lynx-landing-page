"use client";
import React from "react";
import { BladeProvider } from "@razorpay/blade/components";
import { bladeTheme } from "@razorpay/blade/tokens";

const Provider = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <BladeProvider themeTokens={bladeTheme} colorScheme="light">
      {children}
    </BladeProvider>
  );
};

export default Provider;
