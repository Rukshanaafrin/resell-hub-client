"use client";

import { motion } from "framer-motion";

const stories = [
  {
    id: 1,
    name: "Rakib Hasan",
    role: "Buyer",
    image: "https://i.pravatar.cc/150?img=12",
    review:
      "I bought a laptop at a great price. The seller was honest and the product matched the description.",
  },

  {
    id: 2,
    name: "Nusrat Jahan",
    role: "Seller",
    image: "https://i.pravatar.cc/150?img=25",
    review:
      "I sold my old furniture within a week and earned extra money easily.",
  },

  {
    id: 3,
    name: "Sakib Ahmed",
    role: "Buyer",
    image: "https://i.pravatar.cc/150?img=18",
    review:
      "ReSell Hub helped me find affordable products while supporting sustainable shopping.",
  },
];

export default function SuccessStories() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6">

      <h2 className="text-4xl font-bold text-center mb-4">
        Success Stories
      </h2>

      <p className="text-center text-slate-500 mb-12">
        See how ReSell Hub is helping buyers and sellers.
      </p>

      <div className="grid md:grid-cols-3 gap-8">

        {stories.map((story) => (

          <motion.div
            key={story.id}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl shadow-lg p-6"
          >

            <img
              src={story.image}
              alt={story.name}
              className="w-20 h-20 rounded-full mx-auto"
            />

            <h3 className="text-xl font-bold text-center mt-4">
              {story.name}
            </h3>

            <p className="text-cyan-500 text-center">
              {story.role}
            </p>

            <p className="text-slate-600 mt-4 text-center">
              "{story.review}"
            </p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}