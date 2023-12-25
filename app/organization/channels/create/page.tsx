"use client";
import { useSession } from "@/library/requests/queries/useSession";

export default function CreateChannel() {
  const session = useSession();
  return (
    <section className="w-screen min-h-screen flex bg-slate-50 flex-col justify-center items-center">
      <h1 className="text-[.82rem] font-normal w-[220px] font-inter">
        Setup all of your clients, brands or businesses below.
      </h1>
    </section>
  );
}
