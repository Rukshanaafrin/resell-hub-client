"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function ProductDetails() {

    const { id } = useParams();

    const [product, setProduct] = useState(null);

    const [relatedProducts, setRelatedProducts] = useState([]);


    useEffect(() => {

        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data));

    }, [id]);

    useEffect(() => {

        fetch("http://localhost:5000/featured-products")
            .then(res => res.json())
            .then(data => {

                const filtered = data.filter(item => item._id !== id);

                setRelatedProducts(filtered.slice(0, 3));

            });

    }, [id]);



    if (!product) {

        return (

            <div className="text-center py-20">

                Loading...

            </div>

        )

    }



    return (

        <section className="max-w-7xl mx-auto py-16 px-6">


            <div className="grid lg:grid-cols-2 gap-12">


                {/* Left */}
             
                <div>


                    <img

                        src={product.images?.[0]}

                        className="rounded-3xl shadow-xl w-full h-full object-cover"

                    />


                </div>



                {/* Right */}

                <div>

                    <h1 className="text-4xl font-bold">
                        {product.title}
                    </h1>


                    <h2 className="text-3xl mt-5 text-sky-500">
                        ৳ {product.price.toLocaleString()}
                    </h2>



                    <div className="flex gap-3 mt-5">

                        <span className="badge badge-info">
                            {product.category}
                        </span>

                        <span className="badge badge-success">
                            {product.condition}
                        </span>

                        <span className="badge badge-warning">
                            Stock : {product.stock}
                        </span>

                    </div>



                    <p className="mt-6 text-slate-600">

                        {product.description}

                    </p>




                    {/* seller */}

                    <div className="mt-8 border rounded-xl p-5">

                        <div className="flex items-center gap-2">

                            <h3 className="font-bold text-xl">
                                Seller Information
                            </h3>


                            <span className="badge badge-success">

                                Verified Seller

                            </span>

                        </div>



                        <p className="mt-3">

                            Name :
                            {product.sellerInfo?.name}

                        </p>


                        <p>

                            Email :
                            {product.sellerInfo?.email}

                        </p>


                        <p>

                            Phone :
                            {product.sellerInfo?.phone}

                        </p>


                    </div>



                    {/* Reviews */}

                    <div className="mt-8">

                        <h2 className="text-2xl font-bold mb-4">

                            Customer Reviews

                        </h2>


                        <div className="border rounded-xl p-5">

                            <h3 className="font-semibold">

                                Rakib Hasan ⭐⭐⭐⭐⭐

                            </h3>


                            <p className="mt-2 text-slate-600">

                                Product condition was exactly as described.
                                Highly recommended seller.

                            </p>

                        </div>

                    </div>





                    <div className="flex gap-4 mt-8">


                        <button className="btn btn-info">

                            Buy Now

                        </button>



                        <button className="btn btn-outline btn-info">

                            Wishlist

                        </button>




                        <button className="btn btn-outline btn-error">

                            Report

                        </button>



                    </div>



                </div>




            </div>

            {/* Related Products */}

<div className="mt-20">

    <h2 className="text-3xl font-bold mb-8">

        Related Products

    </h2>


    <div className="grid md:grid-cols-3 gap-6">

        {relatedProducts.map(item => (

            <div
                key={item._id}
                className="card bg-base-100 shadow-xl"
            >

                <figure>

                    <img
                        src={item.images?.[0]}
                        className="h-56 w-full object-cover"
                    />

                </figure>


                <div className="card-body">

                    <h2 className="card-title">

                        {item.title}

                    </h2>


                    <p className="text-sky-500 font-bold">

                        ৳ {item.price?.toLocaleString()}

                    </p>


                    <div className="card-actions justify-end">

                        <a
                            href={`/products/${item._id}`}
                            className="btn btn-info"
                        >

                            View Details

                        </a>

                    </div>

                </div>

            </div>

        ))}

    </div>

</div>



        </section>

    )


}