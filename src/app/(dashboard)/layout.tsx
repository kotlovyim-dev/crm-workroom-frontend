import { Sidebar } from "@/components/layout/sidebar";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-row w-full gap-7.5 p-5">
            <Sidebar />
            {children}
        </div>
    );
}
