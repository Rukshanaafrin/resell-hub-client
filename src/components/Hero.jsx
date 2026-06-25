"use client";

import Link from "next/link";

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section>

      <motion.div
        className="max-w-7xl mx-auto px-6 py-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        <div className="grid lg:grid-cols-2 gap-12 items-center">


          {/* Left Side */}

          <div>

            <span className="bg-sky-100 text-sky-600 px-4 py-2 rounded-full text-sm font-medium">

              ♻ Sustainable Marketplace

            </span>



            <h1 className="mt-6 text-5xl lg:text-6xl font-bold leading-tight">

              <span className="text-violet-600">
                Buy & Sell
              </span>

              <span className="text-sky-500">
                {" "}Pre-Owned
              </span>

              <span className="text-violet-600">
                Products
              </span>

              <br />

              <span className="text-violet-600">
                With Confidence
              </span>

            </h1>


            <p className="text-gray-600 dark:text-slate-300 mt-6 leading-8">


              Discover affordable second-hand products,

              connect with trusted sellers,

              and contribute to a greener future.



            </p>





            <div className="flex gap-4 mt-8">


              <Link href="/products">

                <button className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-xl">

                  Explore Products

                </button>

              </Link>




              <Link href="/dashboard/add-product">

                <button className="border border-sky-500 text-sky-500 px-6 py-3 rounded-xl hover:bg-sky-500 hover:text-white">

                  Start Selling

                </button>

              </Link>


            </div>




          </div>








          {/* Right Side */}

          <div>


            <img

              src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=1000"

              alt="Hero"

              className="rounded-3xl shadow-xl"

            />


          </div>



        </div>





        {/* Statistics */}



        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">





          <div className="bg-white dark:bg-slate-800 rounded-xl shadow p-6 text-center">


            <h2 className="text-3xl font-bold text-sky-500">

              5K+

            </h2>


            <p className="text-slate-700 dark:text-white">

              Products

            </p>


          </div>






          <div className="bg-white dark:bg-slate-800 rounded-xl shadow p-6 text-center">


            <h2 className="text-3xl font-bold text-sky-500">

              2K+

            </h2>


            <p className="text-slate-700 dark:text-white">

              Sellers

            </p>


          </div>






          <div className="bg-white dark:bg-slate-800 rounded-xl shadow p-6 text-center">


            <h2 className="text-3xl font-bold text-sky-500">

              10K+

            </h2>


            <p className="text-slate-700 dark:text-white">

              Buyers

            </p>


          </div>






          <div className="bg-white dark:bg-slate-800 rounded-xl shadow p-6 text-center">


            <h2 className="text-3xl font-bold text-sky-500">

              25K+

            </h2>


            <p className="text-slate-700 dark:text-white">

              Completed Orders

            </p>


          </div>



        </div>




      </motion.div>

    </section >
  );
}