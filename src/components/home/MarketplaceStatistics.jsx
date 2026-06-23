"use client";

import { motion } from "framer-motion";

const stats = [
  {
    title: "Total Products",
    value: "5K+",
  },
  {
    title: "Total Sellers",
    value: "2K+",
  },
  {
    title: "Total Buyers",
    value: "10K+",
  },
  {
    title: "Completed Orders",
    value: "25K+",
  },
];

export default function MarketplaceStatistics() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6">

      <h2 className="text-4xl font-bold text-center mb-4">
        Marketplace Statistics
      </h2>

      <p className="text-slate-500 text-center mb-12">
        Our growing community in numbers
      </p>

      <div className="grid md:grid-cols-4 gap-6">

        {stats.map((stat, index) => (

          <motion.div
            key={index}

            initial={{ opacity: 0, y: 40 }}

            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true }}

            transition={{ duration: 0.5, delay: index * 0.1 }}

            whileHover={{ scale: 1.05 }}

            className="bg-white rounded-2xl shadow-lg p-8 text-center"
          >

            <h2 className="text-4xl font-bold text-cyan-500">
              {stat.value}
            </h2>

            <p className="mt-3 text-slate-600 font-medium">
              {stat.title}
            </p>

          </motion.div>

        ))}
      </div>

    </section>
  );
}