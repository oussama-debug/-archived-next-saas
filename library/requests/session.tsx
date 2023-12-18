"use client";

import { PropsWithChildren } from "react";
import { useSession } from "./queries/useSession";

export default function SessionProvider({ children }: PropsWithChildren) {
  const { data, isLoading, isError, error } = useSession();

  if (isError) {
    alert("ERROR");
    return <></>;
  }

  if (isLoading) {
    return <>Loading session</>;
  } else {
    return <>{children}</>;
  }
}
