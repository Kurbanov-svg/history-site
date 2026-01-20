"use client";
import LayoutSite from "@/src/components/layout/LayoutSite";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC, ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};
const querlyclient = new QueryClient();
const layout: FC<LayoutProps> = ({ children }) => {
  return (
    <QueryClientProvider client={querlyclient}>
      <LayoutSite>{children}</LayoutSite>
    </QueryClientProvider>
  );
};

export default layout;
