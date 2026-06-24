"use client";

import { useEffect, useState } from "react";

export default function ManageOrders() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {

        fetch("http://localhost:5000/orders")
            .then(res => res.json())
            .then(data => setOrders(data));

    }, []);


    const handleUpdate = async (id, status) => {

        const delivery = status;

        const res = await fetch(
            `http://localhost:5000/orders/${id}`,
            {
                method: "PATCH",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    status,
                    delivery
                })
            }
        );


        const data = await res.json();


        if (data.modifiedCount > 0) {

            const updated = orders.map(order =>

                order._id === id

                    ? {
                        ...order,
                        status,
                        delivery
                    }

                    : order
            );

            setOrders(updated);

        }

    };


    return (

        <div>

            <h1 className="text-4xl font-bold mb-6">

                Manage Orders

            </h1>


            <div className="bg-white rounded-xl shadow-lg p-4 overflow-x-auto">

                <table className="table">

                    <thead>

                        <tr>

                            <th>#</th>

                            <th>Product</th>

                            <th>Buyer</th>

                            <th>Price</th>

                            <th>Status</th>

                            <th>Delivery</th>

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

                                        {order.buyer}

                                    </td>


                                    <td>

                                        ৳ {order.price}

                                    </td>


                                    <td>


                                        <span

                                            className={`badge

                                            ${order.status === "Pending" ? "badge-warning" : ""}

                                            ${order.status === "Accepted" ? "badge-info" : ""}

                                            ${order.status === "Processing" ? "badge-secondary" : ""}

                                            ${order.status === "Shipped" ? "badge-primary" : ""}

                                            ${order.status === "Delivered" ? "badge-success" : ""}

                                            `}

                                        >

                                            {order.status}

                                        </span>


                                    </td>


                                    <td>


                                        <select

                                            value={order.delivery}

                                            onChange={(e) =>

                                                handleUpdate(

                                                    order._id,

                                                    e.target.value

                                                )

                                            }

                                            className="select select-bordered select-sm"

                                        >

                                            <option>

                                                Pending

                                            </option>

                                            <option>

                                                Accepted

                                            </option>

                                            <option>

                                                Processing

                                            </option>

                                            <option>

                                                Shipped

                                            </option>

                                            <option>

                                                Delivered

                                            </option>

                                        </select>


                                    </td>



                                    <td>


                                        <div className="flex gap-2">


                                            <button

                                                onClick={() =>
                                                    handleUpdate(
                                                        order._id,
                                                        "Accepted"
                                                    )
                                                }

                                                className="btn btn-success btn-xs"

                                            >

                                                Accept

                                            </button>



                                            <button

                                                onClick={() =>
                                                    handleUpdate(
                                                        order._id,
                                                        "Rejected"
                                                    )
                                                }

                                                className="btn btn-error btn-xs"

                                            >

                                                Reject

                                            </button>



                                        </div>


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