import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-0">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>

            <h2 className="text-3xl font-bold text-sky-400">
              ReSell Hub
            </h2>

            <p className="mt-5 text-sm leading-7">
              Buy and sell quality second-hand products safely,
              affordably and sustainably.

              Join thousands of users building a greener future
              through smart shopping.
            </p>

          </div>


          {/* Quick Links */}

          <div>

            <h3 className="text-white font-semibold mb-5">
              Quick Links
            </h3>

            <div className="space-y-3">

              <Link href="/" className="block hover:text-sky-400">
                Home
              </Link>

              <Link
                href="/products"
                className="block hover:text-sky-400"
              >
                Products
              </Link>

              <Link
                href="/categories"
                className="block hover:text-sky-400"
              >
                Categories
              </Link>

              <Link
                href="/dashboard"
                className="block hover:text-sky-400"
              >
                Dashboard
              </Link>

              <Link
                href="/about"
                className="block hover:text-sky-400"
              >
                About Us
              </Link>

              <Link
                href="/contact"
                className="block hover:text-sky-400"
              >
                Contact Us
              </Link>

            </div>

          </div>



          {/* Contact */}

          <div>

            <h3 className="text-white font-semibold mb-5">
              Contact Us
            </h3>


            <div className="space-y-4 text-sm">

              <div className="flex items-center gap-2">

                <Mail size={18} />

                support@resellhub.com

              </div>


              <div className="flex items-center gap-2">

                <Phone size={18} />

                +8801712345678

              </div>



              <div className="flex items-center gap-2">

                <MapPin size={18} />

                Dhaka, Bangladesh

              </div>

            </div>

          </div>




          {/* Social */}

          <div>

            <h3 className="text-white font-semibold mb-5">
              Follow Us
            </h3>


            <div className="flex gap-4">


              <a
                href="#"
                className="p-3 rounded-full bg-slate-800 hover:bg-sky-500 transition"
              >
                F
              </a>



              <a
                href="#"
                className="p-3 rounded-full bg-slate-800 hover:bg-sky-500 transition"
              >
                I
              </a>



              <a
                href="#"
                className="p-3 rounded-full bg-slate-800 hover:bg-sky-500 transition"
              >
                X
              </a>



              <a
                href="#"
                className="p-3 rounded-full bg-slate-800 hover:bg-sky-500 transition"
              >
                <Globe size={18} />
              </a>

            </div>


            <p className="mt-6 text-sm">
              Stay connected with our marketplace community.
            </p>

          </div>


        </div>

      </div>



      {/* Bottom */}

      <div className="border-t border-slate-700">

        <div className="max-w-7xl mx-auto py-6 px-6">

          <p className="text-center text-sm">

            © 2026 ReSell Hub. All Rights Reserved.

          </p>

        </div>

      </div>

    </footer>
  );
}