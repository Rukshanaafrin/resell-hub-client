"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function ProductsPage() {

    const [products, setProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);

    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("");

    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 4;

    const searchParams = useSearchParams();
    const category = searchParams.get("category");



    useEffect(() => {

        let url = "https://resell-hub-server.onrender.com//products";

        if (category) {

            url += `?category=${category}`;

        }

        fetch(url)

            .then(res => res.json())

            .then(data => {

                setAllProducts(data);

                setProducts(data);

            })

    }, [category]);





    useEffect(() => {


        let filtered = [...allProducts];



        if (search) {


            filtered = filtered.filter(item =>

                item.title.toLowerCase()

                    .includes(search.toLowerCase())

            )

        }



        if (sort === "low") {


            filtered.sort((a, b) =>

                a.price - b.price

            )

        }



        if (sort === "high") {


            filtered.sort((a, b) =>

                b.price - a.price

            )

        }



        setProducts(filtered);

        setCurrentPage(1);


    }, [search, sort, allProducts]);





    const lastIndex = currentPage * itemsPerPage;

    const firstIndex = lastIndex - itemsPerPage;


    const currentProducts = products.slice(

        firstIndex,

        lastIndex

    );


    const totalPages = Math.ceil(

        products.length / itemsPerPage

    );






    return (

        <section className="max-w-7xl mx-auto py-16 px-6">


            <h1 className="text-5xl font-bold text-center mb-4">

                All Products

            </h1>



            {

                category && (


                    <p className="text-center text-cyan-500 mb-8">


                        Showing : {category}


                    </p>


                )

            }





            <div className="flex flex-col md:flex-row gap-4 mb-10">



                <input

                    type="text"

                    placeholder="Search Product"

                    className="input input-bordered w-full"

                    onChange={(e) =>

                        setSearch(e.target.value)

                    }

                />





                <select

                    className="select select-bordered"

                    onChange={(e) =>

                        setSort(e.target.value)

                    }

                >


                    <option>

                        Sort

                    </option>



                    <option value="low">

                        Low to High

                    </option>



                    <option value="high">

                        High to Low

                    </option>


                </select>


            </div>







            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">



                {

                    currentProducts.map(product => (


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



                                <p className="font-semibold">

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





            <div className="flex justify-center gap-3 mt-12">


                {

                    Array.from(

                        { length: totalPages },

                        (_, i) => (


                            <button


                                key={i}


                                onClick={() =>

                                    setCurrentPage(i + 1)

                                }


                                className={`btn ${

                                    currentPage === i + 1

                                        ? "btn-info"

                                        : "btn-outline"

                                }`}

                            >



                                {i + 1}



                            </button>



                        )

                    )

                }


            </div>



        </section>

    )

}