"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useEffect } from "react";
import { useSession } from "@/lib/auth-client";

import {
  Home,
  LayoutDashboard,
  ShoppingCart,
  Heart,
  CreditCard,
  User,
  PlusCircle,
  Package,
  Truck,
  BarChart3,
  Users,
  Boxes,
  Menu,
  X,
  ClipboardList,
  TrendingUp,
  Settings
} from "lucide-react";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const { data: session } = useSession();

  const [role, setRole] = useState("");

  useEffect(() => {
    if (session?.user?.email) {
      fetch(
        `https://resell-hub-server.onrender.com/users/${session.user.email}`
      )
        .then((res) => res.json())
        .then((data) => setRole(data.role));
    }
  }, [session]);



  const buyerLinks = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: <LayoutDashboard size={18} />,
    },
    {
      name: "My Orders",
      href: "/dashboard/my-orders",
      icon: <ShoppingCart size={18} />,
    },
    {
      name: "Wishlist",
      href: "/dashboard/wishlist",
      icon: <Heart size={18} />,
    },
    {
      name: "Payment History",
      href: "/dashboard/payment-history",
      icon: <CreditCard size={18} />,
    },
    {
      name: "Profile",
      href: "/dashboard/profile",
      icon: <User size={18} />,
    },
    {
      name: "Settings",
      href: "/dashboard/settings",
      icon: <Settings size={18} />,
    },
  ];

  const sellerLinks = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: <LayoutDashboard size={18} />,
    },
    {
      name: "Add Product",
      href: "/dashboard/add-product",
      icon: <PlusCircle size={18} />,
    },
    {
      name: "My Products",
      href: "/dashboard/my-products",
      icon: <Package size={18} />,
    },
    {
      name: "Manage Orders",
      href: "/dashboard/manage-orders",
      icon: <Truck size={18} />,
    },
    {
      name: "Sales",
      href: "/dashboard/sales",
      icon: <TrendingUp size={18} />,
    },
    {
      name: "Profile",
      href: "/dashboard/profile",
      icon: <User size={18} />,
    },
    {
      name: "Settings",
      href: "/dashboard/settings",
      icon: <Settings size={18} />,
    },
  ];

  const adminLinks = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: <LayoutDashboard size={18} />,
    },
    {
      name: "Manage Users",
      href: "/dashboard/manage-users",
      icon: <Users size={18} />,
    },
    {
      name: "Manage Products",
      href: "/dashboard/manage-products",
      icon: <Boxes size={18} />,
    },
    {
      name: "Admin Orders",
      href: "/dashboard/admin-orders",
      icon: <ClipboardList size={18} />,
    },
    {
      name: "Analytics",
      href: "/dashboard/analytics",
      icon: <BarChart3 size={18} />,
    },
    {
      name: "Profile",
      href: "/dashboard/profile",
      icon: <User size={18} />,
    },
    {
      name: "Settings",
      href: "/dashboard/settings",
      icon: <Settings size={18} />,
    },
  ];



  return (
    <div className="h-screen overflow-hidden bg-slate-100">

      {/* Mobile Button */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 bg-cyan-500 p-2 rounded-lg text-white"
      >
        <Menu />
      </button>


      <div className="flex h-full">

        {/* Sidebar */}
        <aside
          className={`

          fixed md:relative

          top-0 left-0

          z-50

          w-72

          h-screen

          bg-slate-900

          p-6

          overflow-y-auto

          transition-all duration-300


          ${open ? "translate-x-0" : "-translate-x-full"}

          md:translate-x-0

        `}
        >

          <div className="flex justify-between items-center mb-8">

            <h2 className="text-2xl font-bold text-cyan-400">
              Dashboard
            </h2>

            <button
              onClick={() => setOpen(false)}
              className="md:hidden text-white"
            >
              <X />
            </button>

          </div>



          <div className="space-y-2">

            {(role === "admin"
              ? adminLinks
              : role === "seller"
                ? sellerLinks
                : buyerLinks
            ).map((link) => (

              <Link
                key={link.href}
                href={link.href}

                onClick={() => setOpen(false)}

                className={`

                flex items-center gap-3

                px-4 py-3

                rounded-xl

                transition-all


                ${pathname === link.href
                    ? "bg-cyan-500 text-white"
                    : "text-slate-300 hover:bg-slate-800"
                  }

              `}
              >

                {link.icon}

                {link.name}

              </Link>

            ))}

          </div>

        </aside>



        {/* Main Content */}
        <main
          className="

          flex-1

          overflow-y-auto

          h-screen

          p-5

          md:p-8

          md:ml-0

        "
        >

          {children}

        </main>

      </div>

    </div>
  );
}