"use client";

import type { ReactNode } from "react";
import { NavigationProvider } from "@/context/NavigationContext";

type AppProvidersProps = {
  children: ReactNode;
};

export const AppProviders = ({
  children,
}: AppProvidersProps): React.JSX.Element => {
  return <NavigationProvider>{children}</NavigationProvider>;
};
