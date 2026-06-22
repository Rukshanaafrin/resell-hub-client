"use client";

import { motion } from "framer-motion";
import { Recycle, Leaf, Earth } from "lucide-react";

const impacts = [
  {
    icon: Recycle,
    title: "5K+ Reused Products",
    description:
      "Thousands of products found a second life instead of ending up as waste.",
  },

  {
    icon: Leaf,
    title: "Reduced Waste",
    description:
      "Buying pre-owned items helps reduce landfill waste and pollution.",
  },

  {
    icon: Earth,
    title: "Greener Future",
    description:
      "Supporting sustainable shopping contributes to a healthier planet.",
  },
];

export default function SustainabilityImpact() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6">

      <h2 className="text-4xl font-bold text-center mb-4">
        Sustainability Impact
      </h2>

      <p className="text-slate-500 text-center mb-12">
        Every purchase makes a difference.
      </p>

      <div className="grid md:grid-cols-3 gap-8">

        {impacts.map((item, index) => {

          const Icon = item.icon;

          return (

            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg p-8 text-center"
            >

              <div className="w-16 h-16 mx-auto rounded-full bg-cyan-100 flex items-center justify-center">

                <Icon
                  size={32}
                  className="text-cyan-500"
                />

              </div>

              <h3 className="text-2xl font-bold mt-6">

                {item.title}

              </h3>

              <p className="text-slate-500 mt-4">

                {item.description}

              </p>

            </motion.div>

          );
        })}
      </div>

    </section>
  );
}