"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import ProductSkeleton from "@/components/shared/ProductSkeleton";

export default function FeaturedProducts() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetch("https://resell-hub-server.onrender.com/featured-products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.log(err));

  }, []);



  if (products.length === 0) {

    return (

      <section className="max-w-7xl mx-auto py-20 px-4">

        <h2 className="text-4xl font-bold text-center mb-12">

          Featured Products

        </h2>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {

            [1, 2, 3, 4].map(item => (

              <ProductSkeleton key={item} />

            ))

          }

        </div>

      </section>

    );

  }



  return (

    <section className="max-w-7xl mx-auto py-20 px-4">

      <h2 className="text-4xl font-bold text-center mb-12">

        Featured Products

      </h2>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {

          products.map(product => (

            <motion.div

              key={product._id}

              initial={{ opacity: 0, scale: 0.9 }}

              whileInView={{ opacity: 1, scale: 1 }}

              viewport={{ once: true }}

              transition={{ duration: 0.5 }}

              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"

            >

              <Image

                src={
                  product.image ||
                  product.images?.[0] ||
                  "https://placehold.co/400x250"
                }

                width={400}

                height={250}

                alt={product.name || "Product"}

                className="w-full h-52 object-cover"

              />


              <div className="p-4">

                <h3 className="font-bold text-lg text-slate-900">

                  {product.name || product.title || "No Name"}

                </h3>


                <p className="text-slate-500">

                  {product.category}

                </p>


                <p className="font-bold text-cyan-500 mt-1">

                  ৳ {product.price}

                </p>


                <p className="text-yellow-500 mt-1">

                  ⭐ {product.rating || 4.5}

                </p>


                <div className="mt-4 flex justify-end">

                  <Link href={`/products/${product._id}`}>

                    <button className="btn btn-info btn-sm">

                      Details

                    </button>

                  </Link>

                </div>

              </div>

            </motion.div>

          ))

        }

      </div>

    </section>

  );

}