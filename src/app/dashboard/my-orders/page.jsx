"use client";

import { useEffect, useState } from "react";

export default function MyOrders() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {

        fetch("https://resell-hub-server.onrender.com//orders")
            .then(res => res.json())
            .then(data => setOrders(data));

    }, []);



    const handleCancel = async (id) => {

        const ok = confirm("Cancel this order?");

        if (!ok) return;


        await fetch(

            `https://resell-hub-server.onrender.com//cancel-order/${id}`,

            {

                method: "PATCH"

            }

        );



        setOrders(

            orders.map(order =>

                order._id === id

                    ?

                    {

                        ...order,

                        status: "Cancelled"

                    }

                    : order

            )

        );


    };



    return (

        <div>


            <h1 className="text-4xl font-bold mb-6">

                My Orders

            </h1>



            <div className="overflow-x-auto bg-white rounded-xl shadow p-4">


                <table className="table">


                    <thead>

                        <tr>

                            <th>#</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>

                        </tr>

                    </thead>



                    <tbody>

                        {

                            orders.map((order, index) => (


                                <tr key={order._id}>


                                    <td>

                                        {index + 1}

                                    </td>


                                    <td>

                                        {order.name}

                                    </td>


                                    <td>

                                        ৳ {order.price}

                                    </td>



                                    <td>

                                        <span


                                            className={`badge

                                            ${order.status === "Pending" && "badge-warning"}

                                            ${order.status === "Processing" && "badge-info"}

                                            ${order.status === "Delivered" && "badge-primary"}

                                            ${order.status === "Completed" && "badge-success"}

                                            ${order.status === "Cancelled" && "badge-error"}

                                            `}


                                        >


                                            {order.status}


                                        </span>


                                    </td>




                                    <td>



                                        <button


                                            onClick={() => handleCancel(order._id)}



                                            disabled={


                                                order.status === "Completed"

                                                ||

                                                order.status === "Delivered"

                                                ||

                                                order.status === "Cancelled"


                                            }



                                            className={`btn btn-xs


                                            ${


                                                    order.status === "Completed"

                                                        ||

                                                        order.status === "Delivered"

                                                        ||

                                                        order.status === "Cancelled"

                                                        ?

                                                        "btn-disabled"

                                                        :

                                                        "btn-error"

                                                }


                                            `}


                                        >



                                            {


                                                order.status === "Cancelled"

                                                    ?

                                                    "Cancelled"



                                                    :


                                                    order.status === "Completed"

                                                        ?

                                                        "Done"



                                                        :



                                                        order.status === "Delivered"

                                                            ?

                                                            "Delivered"



                                                            :


                                                            "Cancel"



                                            }



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