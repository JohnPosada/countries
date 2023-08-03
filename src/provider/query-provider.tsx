"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const client = new QueryClient();

const QueryProvider: FC<Props> = ({ children }) => {
  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default QueryProvider;
