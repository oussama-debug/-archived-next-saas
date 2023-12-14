"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { PropsWithChildren, useState } from "react";

export default function RequestProvider({ children }: PropsWithChildren) {
  const [client] = useState(
    new QueryClient({ defaultOptions: { queries: { staleTime: 60 * 1000 } } })
  );

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
