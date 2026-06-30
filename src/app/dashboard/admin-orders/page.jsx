"use client";

import { useEffect, useState } from "react";
import RoleRoute from "@/components/RoleRoute";

export default function AdminOrders() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {

        fetch("https://resell-hub-server.onrender.com/orders")
            .then(res => res.json())
            .then(data => setOrders(data));

    }, []);



    const handleApprove = async (order) => {

        await fetch(
            `https://resell-hub-server.onrender.com/orders/${order._id}`,
            {
                method: "PATCH",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    status: "Completed"
                })

            }
        );



        setOrders(

            orders.map(o =>

                o._id === order._id
                    ? {
                        ...o,
                        status: "Completed"
                    }
                    : o

            )

        );

    };



    return (
        <RoleRoute role="admin">

        <div>

            <h1 className="text-4xl font-bold mb-6">
                Admin Orders
            </h1>



            <div className="overflow-x-auto bg-white rounded-xl shadow-lg p-4">

                <table className="table">

                    <thead>

                        <tr>

                            <th>#</th>
                            <th>Customer</th>
                            <th>Product</th>
                            <th>Amount</th>
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
                                        {order.buyer}
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

                                            ${order.status === "Pending" ? "badge-warning" : ""}

                                            ${order.status === "Accepted" ? "badge-info" : ""}

                                            ${order.status === "Processing" ? "badge-secondary" : ""}

                                            ${order.status === "Shipped" ? "badge-primary" : ""}

                                            ${order.status === "Delivered" ? "badge-accent" : ""}

                                            ${order.status === "Completed" ? "badge-success" : ""}

                                            `}

                                        >

                                            {order.status}

                                        </span>

                                    </td>



                                    <td>

                                        <button

                                            onClick={() => handleApprove(order)}

                                            disabled={

                                                order.status === "Completed"

                                            }

                                            className="btn btn-success btn-xs"

                                        >

                                            {

                                                order.status === "Completed"

                                                    ? "Done"

                                                    : "Approve"

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

        </RoleRoute>

    );

}