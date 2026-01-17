"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserRole } from "@/lib/types";
import Button from "./ui/Button";

interface LayoutProps {
  children: React.ReactNode;
  role: UserRole;
  userName?: string;
}

const roleConfig: Record<UserRole, { title: string; navItems: { href: string; label: string }[] }> = {
  shipper: {
    title: "Shipper Portal",
    navItems: [
      { href: "/shipper", label: "Dashboard" },
      { href: "/shipper/loads/new", label: "Post Load" },
      { href: "/shipper/loads", label: "My Loads" },
      { href: "/shipper/payments", label: "Payments" },
    ],
  },
  broker: {
    title: "Broker Portal",
    navItems: [
      { href: "/broker", label: "Dashboard" },
      { href: "/broker/loads/new", label: "Post Load" },
      { href: "/broker/loads", label: "My Loads" },
      { href: "/broker/payments", label: "Payments" },
    ],
  },
  fleet_owner: {
    title: "Fleet Owner Portal",
    navItems: [
      { href: "/fleet-owner", label: "Dashboard" },
      { href: "/fleet-owner/loads", label: "Discover Loads" },
      { href: "/fleet-owner/trips", label: "My Trips" },
      { href: "/fleet-owner/drivers", label: "Drivers" },
      { href: "/fleet-owner/earnings", label: "Earnings" },
    ],
  },
  admin: {
    title: "Admin Panel",
    navItems: [
      { href: "/admin", label: "Dashboard" },
      { href: "/admin/users", label: "Users" },
      { href: "/admin/loads", label: "Loads" },
      { href: "/admin/trips", label: "Trips" },
      { href: "/admin/payments", label: "Payments" },
    ],
  },
  driver: {
    title: "Driver Portal",
    navItems: [],
  },
};

export default function Layout({ children, role, userName }: LayoutProps) {
  const pathname = usePathname();
  const config = roleConfig[role];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md border-b-2 border-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="text-xl font-bold text-primary-600">
                  Asian India Trans Logistics
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {config.navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                      pathname === item.href
                        ? "border-primary-600 text-primary-600 font-semibold"
                        : "border-transparent text-gray-600 hover:text-primary-600 hover:border-primary-300"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {userName && <span className="text-sm text-gray-700">{userName}</span>}
              <Button variant="outline" size="sm" onClick={() => (window.location.href = "/")}>
                Logout
              </Button>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">{config.title}</h1>
        {children}
      </main>
    </div>
  );
}

