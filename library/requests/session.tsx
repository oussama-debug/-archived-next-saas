"use client";

import { PropsWithChildren } from "react";
import { useSession } from "./queries/useSession";

export default function SessionProvider({ children }: PropsWithChildren) {
  const { data, isLoading, isError, error } = useSession();

  if (isLoading) {
    return <div>Loading session...</div>;
  } else if (isError) {
    return <div>{error.message}</div>;
  } else {
    return <div>{children}</div>;
  }
}
