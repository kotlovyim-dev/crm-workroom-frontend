"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { NAV_ITEMS } from "@/config/sidebar-nav.config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Sidebar() {
    const pathname = usePathname();

    return (
        <nav>
            <Card className="h-[calc(100vh-40px)] w-55 rounded-lg border py-6 px-4">
                <Image src="/logo.svg" alt="Logo" width={50} height={50} />
                <div className="flex flex-col gap-2">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={cn(
                                "flex items-center w-full p-2 gap-4 rounded-md transition-colors duration-200",
                                pathname === item.href
                                    ? "bg-primary/10 text-primary"
                                    : "text-foreground/70 hover:bg-secondary/50 hover:text-foreground",
                            )}
                        >
                            {item.icon && <item.icon size={24} />}
                            <span className="text-base ">{item.label}</span>
                        </Link>
                    ))}
                </div>
            </Card>
        </nav>
    );
}
