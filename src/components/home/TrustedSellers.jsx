"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BadgeCheck, Star } from "lucide-react";


const sellers = [

    {
        id: 1,
        name: "Nusrat Jahan",
        image: "https://i.pravatar.cc/150?img=25",
        rating: 4.9,
        products: 56
    },

    {
        id: 2,
        name: "Rakib Hasan",
        image: "https://i.pravatar.cc/150?img=12",
        rating: 4.8,
        products: 42
    },

    {
        id: 3,
        name: "Sakib Ahmed",
        image: "https://i.pravatar.cc/150?img=18",
        rating: 5.0,
        products: 71
    }

];


export default function TrustedSellers() {

    return (

        <section className="max-w-7xl mx-auto py-20 px-6">


            <h2 className="text-4xl font-bold text-center mb-4">

                Trusted Sellers

            </h2>


            <p className="text-slate-500 text-center mb-12">

                Meet our highest rated sellers

            </p>




            <div className="grid md:grid-cols-3 gap-8">


                {

                    sellers.map(seller => (


                        <motion.div

                            key={seller.id}

                            whileHover={{ scale: 1.03 }}

                            className="bg-white rounded-3xl shadow-lg p-8 text-center"

                        >


                            <img

                                src={seller.image}

                                alt={seller.name}

                                className="w-24 h-24 rounded-full mx-auto border-4 border-cyan-400"

                            />



                            <div className="flex justify-center items-center mt-4 gap-2">


                                <h3 className="text-2xl font-bold">

                                    {seller.name}

                                </h3>



                                <BadgeCheck
                                    size={22}
                                    className="text-blue-500"
                                />


                            </div>




                            <div className="flex justify-center mt-3">


                                <Star
                                    size={18}
                                    fill="gold"
                                    className="text-yellow-500"
                                />


                                <p className="ml-2 font-medium">

                                    {seller.rating}

                                </p>


                            </div>




                            <p className="mt-3 text-slate-500">


                                {seller.products} Products Listed


                            </p>



                            <Link href={`/sellers/${seller.id}`}>

                                <button className="btn btn-info">

                                    View Profile

                                </button>

                            </Link>



                        </motion.div>

                    ))


                }



            </div>

        </section>

    )

}