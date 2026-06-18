"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
    Home,
    Package,
    Folder,
    LayoutDashboard,
    Moon,
    ChevronDown,
    User,
    Settings,
    ShoppingBag,
    LogOut,
} from "lucide-react";

export default function Navbar() {
    const pathname = usePathname();

    const [open, setOpen] = useState(false);

    const links = [
        {
            name: "Home",
            href: "/",
            icon: <Home size={18} />,
        },
        {
            name: "Products",
            href: "/products",
            icon: <Package size={18} />,
        },
        {
            name: "Categories",
            href: "/categories",
            icon: <Folder size={18} />,
        },
        {
            name: "Dashboard",
            href: "/dashboard",
            icon: <LayoutDashboard size={18} />,
        },
    ];

    return (
        <nav className="border-b bg-white shadow-sm">

            <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

                {/* Logo */}

                <Link href="/">

                    <h2 className="text-2xl font-bold text-sky-600">

                        ReSell Hub

                    </h2>

                </Link>



                {/* Center */}

                <div className="hidden md:flex items-center gap-8">

                    {links.map((link) => (

                        <Link
                            key={link.href}
                            href={link.href}

                            className={`flex items-center gap-2 pb-1 transition-all


              ${pathname === link.href


                                    ? "text-sky-600 border-b-2 border-sky-600"


                                    : "text-gray-700 hover:text-sky-600"

                                }



              `}

                        >


                            {link.icon}


                            {link.name}



                        </Link>

                    ))}

                </div>






                {/* Right Side */}


                <div className="flex items-center gap-4">



                    {/* Theme */}


                    <button


                        className="hover:text-sky-600"

                    >


                        <Moon size={20} />


                    </button>





                    {/* Login */}



                    <button


                        className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg"

                    >


                        Login / Register


                    </button>





                    {/* Dropdown */}



                    <div className="relative">



                        <button


                            onClick={() => setOpen(!open)}


                            className="flex items-center gap-2"

                        >


                            <img


                                src="https://i.pravatar.cc/150?img=12"


                                className="w-10 h-10 rounded-full"


                                alt=""

                            />



                            <span>

                                Sarah J.

                            </span>



                            <ChevronDown size={18} />



                        </button>





                        {

                            open && (



                                <div


                                    className="absolute right-0 mt-3 w-56 bg-white rounded-xl shadow-lg border z-50"

                                >




                                    <Link


                                        href="/profile"

                                        className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100"

                                    >



                                        <User size={16} />

                                        My Profile


                                    </Link>






                                    <Link


                                        href="/settings"

                                        className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100"

                                    >


                                        <Settings size={16} />

                                        Settings


                                    </Link>






                                    <Link


                                        href="/orders"

                                        className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100"

                                    >


                                        <ShoppingBag size={16} />

                                        Orders


                                    </Link>






                                    <button


                                        className="w-full flex items-center gap-2 px-4 py-3 hover:bg-red-100 text-red-500"

                                    >


                                        <LogOut size={16} />

                                        Logout


                                    </button>




                                </div>


                            )


                        }



                    </div>



                </div>




            </div>

        </nav>
    );
}