import SessionProvider from "@/library/requests/session";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <div className="w-full min-h-screen flex flex-row justify-start items-start">
        {children}
      </div>
    </SessionProvider>
  );
}
