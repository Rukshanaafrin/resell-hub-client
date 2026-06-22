"use client";

import { motion } from "framer-motion";
import {
  Laptop,
  Sofa,
  Car,
  Shirt,
  Smartphone,
} from "lucide-react";

const categories = [
  {
    name: "Electronics",
    icon: Laptop,
    total: "250+ Products",
  },
  {
    name: "Furniture",
    icon: Sofa,
    total: "120+ Products",
  },
  {
    name: "Vehicles",
    icon: Car,
    total: "90+ Products",
  },
  {
    name: "Fashion",
    icon: Shirt,
    total: "300+ Products",
  },
  {
    name: "Mobile Phones",
    icon: Smartphone,
    total: "180+ Products",
  },
];

export default function Categories() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6">

      <h2 className="text-4xl font-bold text-center mb-4">
        Popular Categories
      </h2>

      <p className="text-center text-slate-500 mb-12">
        Browse products by category
      </p>

      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">

        {categories.map((item, index) => {

          const Icon = item.icon;

          return (

            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-md p-8 text-center"
            >

              <div className="w-16 h-16 mx-auto rounded-full bg-cyan-100 flex items-center justify-center">

                <Icon
                  size={32}
                  className="text-cyan-500"
                />

              </div>

              <h3 className="font-bold text-xl mt-5">
                {item.name}
              </h3>

              <p className="text-slate-500 mt-2">
                {item.total}
              </p>

            </motion.div>

          );
        })}

      </div> 

    </section>
  );
}