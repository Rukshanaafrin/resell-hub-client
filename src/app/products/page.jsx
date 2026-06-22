"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProductsPage() {

    const [products, setProducts] = useState([]);


    useEffect(() => {

        fetch("http://localhost:5000/featured-products")
            .then(res => res.json())
            .then(data => setProducts(data));

    }, []);




    return (

        <section className="max-w-7xl mx-auto py-16 px-6">

            <h1 className="text-5xl font-bold text-center mb-12">

                All Products

            </h1>



            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                {

                    products.map(product => (


                        <div
                            key={product._id}
                            className="card bg-base-100 shadow-xl"
                        >


                            <figure>

                                <img
                                    src={product.images?.[0]}
                                    className="h-60 w-full object-cover"
                                />

                            </figure>



                            <div className="card-body">


                                <h2 className="card-title">

                                    {product.title}

                                </h2>


                                <p>

                                    ৳ {product.price}

                                </p>


                                <div className="card-actions justify-end">


                                    <Link
                                        href={`/products/${product._id}`}
                                        className="btn btn-info"
                                    >

                                        Details

                                    </Link>


                                </div>

                            </div>

                        </div>


                    ))

                }

            </div>

        </section>

    )

}