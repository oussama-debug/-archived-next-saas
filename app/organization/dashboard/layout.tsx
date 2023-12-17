import SessionProvider from "@/library/requests/session";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}
