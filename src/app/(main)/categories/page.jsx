"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  Monitor,
  Sofa,
  Bike,
  Shirt,
  Smartphone,
} from "lucide-react";

export default function CategoriesPage() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {

    fetch("http://localhost:5000/categories")
      .then(res => res.json())
      .then(data => setCategories(data));

  }, []);



  const icons = {

    Electronics: <Monitor size={40} />,
    Furniture: <Sofa size={40} />,
    Vehicles: <Bike size={40} />,
    Fashion: <Shirt size={40} />,
    "Mobile Phones": <Smartphone size={40} />

  };



  return (

    <section className="max-w-7xl mx-auto py-20 px-6">


      <h1 className="text-4xl font-bold text-center">

        Popular Categories

      </h1>


      <p className="text-center text-slate-500 mt-3 mb-12">

        Browse products by category

      </p>




      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">


        {

          categories.map((category) => (


            <Link

              key={category._id}

              href={`/products?category=${category._id}`}

            >



              <div


                className="bg-white border rounded-2xl shadow-md p-8 text-center

                hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"

              >


                <div className="flex justify-center text-cyan-500 mb-4">

                  {icons[category._id]}

                </div>



                <h2 className="text-2xl font-bold">

                  {category._id}

                </h2>



                <p className="text-slate-500 mt-2">

                  Browse Products →

                </p>


              </div>


            </Link>

          ))

        }



      </div>

    </section>

  );

}