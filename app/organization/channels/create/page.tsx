"use client";
import { useSession } from "@/library/requests/queries/useSession";

export default function CreateChannel() {
  const session = useSession();
  return (
    <section className="w-screen min-h-screen flex flex-col justify-center items-center">
      <h1></h1>
    </section>
  );
}
