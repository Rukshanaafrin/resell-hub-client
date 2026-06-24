"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
// import { useTheme } from "next-themes";
// import { Sun } from "lucide-react";
import { useSession, authClient } from "@/lib/auth-client";

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
    Menu,
    X,
    Info,
    Mail,
} from "lucide-react";

export default function Navbar() {

    const pathname = usePathname();

    const { data: session } = useSession();


    const [open, setOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    // const { theme, setTheme } = useTheme();


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
            name: "About Us",
            href: "/about",
            icon: <Info size={18} />,
        },

        {
            name: "Contact Us",
            href: "/contact",
            icon: <Mail size={18} />,
        },

        {
            name: "Dashboard",
            href: "/dashboard",
            icon: <LayoutDashboard size={18} />,
        },

    ];


    return (

        <nav className="sticky top-0 z-50 border-b border-slate-800 bg-gradient-to-r from-slate-950 via-blue-950 to-slate-950 backdrop-blur-md shadow-md">

            <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

                {/* Logo */}

                <Link
                    href="/"
                    className="flex items-center gap-3"
                >

                    <Image
                        src="/logo.png"
                        width={30}
                        height={30}
                        className="rounded-md"
                        alt="logo"
                    />

                    <h2 className="text-2xl font-bold">

                        <span className="text-cyan-400">

                            ReSell

                        </span>

                        <span className="text-white">

                            Hub

                        </span>

                    </h2>

                </Link>



                {/* Desktop Menu */}

                <div className="hidden md:flex items-center gap-8">

                    {

                        links.map((link) => (

                            <Link
                                key={link.href}
                                href={link.href}

                                className={`flex items-center gap-2 pb-1 transition


                                ${pathname === link.href


                                        ? "text-purple-400 border-b-2 border-purple-400"


                                        : "text-gray-300 hover:text-purple-400"
                                    }

                                `}
                            >

                                {link.icon}

                                {link.name}

                            </Link>

                        ))

                    }

                </div>





                {/* Right */}

                <div className="flex items-center gap-4">


                    {/* Theme */}

                    {/* <button


                        onClick={() => {


                            setTheme(

                                theme === "dark"

                                    ?

                                    "light"

                                    :

                                    "dark"

                            )

                        }}



                        className="text-cyan-400 hover:scale-110 duration-300"


                    >


                        {

                            theme === "dark"

                                ?

                                <Sun size={20} />

                                :

                                <Moon size={20} />

                        }


                    </button> */}



                    {/* Desktop Login */}

                    {
                        !session ? (

                            <div className="hidden md:flex gap-2">

                                <Link
                                    href="/login"
                                    className={`px-4 py-2 rounded-xl transition ${pathname === "/login"
                                        ? "bg-purple-600 text-white"
                                        : "border border-purple-500 text-purple-300 hover:bg-purple-600 hover:text-white"
                                        }`}
                                >

                                    Login

                                </Link>


                                <Link
                                    href="/register"
                                    className={`px-4 py-2 rounded-xl transition ${pathname === "/register"
                                        ? "bg-purple-600 text-white"
                                        : "border border-purple-500 text-purple-300 hover:bg-purple-600 hover:text-white"
                                        }`}
                                >

                                    Register

                                </Link>

                            </div>

                        )

                            :

                            null

                    }





                    {/* Profile */}

                    {
                        session && (

                            <div className="hidden md:block relative">


                                <button

                                    onClick={() => setOpen(!open)}

                                    className="flex items-center gap-2"

                                >


                                    <Image

                                        src={session.user.image || "/profile.jpg"}

                                        width={40}

                                        height={40}

                                        alt="profile"

                                        className="rounded-full object-cover w-10 h-10 border-2 border-cyan-400"

                                    />



                                    <span className="text-white">

                                        {session.user.name}

                                    </span>



                                    <ChevronDown
                                        size={18}
                                        className="text-white"
                                    />

                                </button>



                                {


                                    open && (


                                        <div className="absolute right-0 mt-3 w-56 bg-slate-900 rounded-xl shadow-lg border border-slate-700 z-50">


                                            <Link

                                                href="/dashboard/profile"

                                                className="flex items-center gap-2 px-4 py-3 hover:bg-slate-800 text-white"

                                            >

                                                <User size={16} />

                                                My Profile

                                            </Link>




                                            <Link

                                                href="/dashboard"

                                                className="flex items-center gap-2 px-4 py-3 hover:bg-slate-800 text-white"

                                            >

                                                <LayoutDashboard size={16} />

                                                Dashboard

                                            </Link>


                                            <Link href="/dashboard/settings">

                                                <div className="flex items-center gap-2 px-4 py-3 hover:bg-slate-800 text-white">

                                                    <Settings size={18} />

                                                    Settings

                                                </div>

                                            </Link>




                                            <button


                                                onClick={async () => {


                                                    await authClient.signOut()




                                                }}


                                                className="w-full flex items-center gap-2 px-4 py-3 hover:bg-red-900 text-red-400"

                                            >


                                                <LogOut size={16} />

                                                Logout


                                            </button>

                                        </div>


                                    )

                                }


                            </div>

                        )

                    }



                    {/* Mobile Menu */}

                    <button

                        onClick={() => setMenuOpen(!menuOpen)}

                        className="md:hidden text-white"

                    >

                        {

                            menuOpen

                                ?

                                <X size={24} />

                                :

                                <Menu size={24} />

                        }

                    </button>



                </div>



            </div>




            {/* Mobile Drawer */}


            {

                menuOpen && (


                    <div className="md:hidden bg-slate-900 px-5 pb-5">



                        <div className="flex flex-col gap-4">



                            {

                                links.map((link) => (


                                    <Link

                                        key={link.href}

                                        href={link.href}

                                        className="text-gray-300"


                                    >

                                        {link.name}

                                    </Link>

                                ))

                            }



                            <Link
                                href="/login"
                                className={`px-4 py-2 rounded-xl transition ${pathname === "/login"
                                    ? "bg-purple-600 text-white"
                                    : "border border-purple-500 text-purple-300 hover:bg-purple-600 hover:text-white"
                                    }
                                    `}
                            >
                                Login
                            </Link>



                            <Link
                                href="/register"
                                className={`px-4 py-2 rounded-xl transition ${pathname === "/register"
                                    ? "bg-purple-600 text-white"
                                    : "border border-purple-500 text-purple-300 hover:bg-purple-600 hover:text-white"
                                    }
                                    `}
                            >
                                Register
                            </Link>



                        </div>


                    </div>

                )

            }


        </nav>

    );
}