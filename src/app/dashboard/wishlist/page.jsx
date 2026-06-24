"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Wishlist() {

    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {

        fetch("http://localhost:5000/wishlist")
            .then(res => res.json())
            .then(data => {

                setWishlist(data);

            });

    }, []);




    const handleRemove = async (id) => {


        const ok = confirm("Remove From Wishlist?");

        if (!ok) return;



        await fetch(

            `http://localhost:5000/wishlist/${id}`,

            {

                method: "DELETE"

            }

        );



        setWishlist(

            wishlist.filter(

                item => item._id !== id

            )

        );


    };





    return (


        <div>


            <h1 className="text-4xl font-bold mb-6">

                Wishlist

            </h1>



            <div className="overflow-x-auto bg-white rounded-xl shadow p-4">


                <table className="table">


                    <thead>


                        <tr>

                            <th>#</th>

                            <th>Product</th>

                            <th>Price</th>

                            <th>Category</th>

                            <th>Action</th>

                        </tr>


                    </thead>



                    <tbody>



                        {

                            wishlist.map((item, index) => (



                                <tr key={item._id}>


                                    <td>

                                        {index + 1}

                                    </td>



                                    <td>

                                        {item.title}

                                    </td>



                                    <td>

                                        ৳ {item.price}

                                    </td>



                                    <td>

                                        {item.category}

                                    </td>





                                    <td className="space-x-2">



                                        <Link

                                            href={`/products/${item._id}`}

                                            className="btn btn-xs btn-info"

                                        >

                                            Details

                                        </Link>




                                        <button


                                            onClick={() => handleRemove(item._id)}

                                            className="btn btn-xs btn-error"


                                        >

                                            Remove


                                        </button>



                                    </td>




                                </tr>



                            ))

                        }



                    </tbody>



                </table>



            </div>


        </div>

    );


}