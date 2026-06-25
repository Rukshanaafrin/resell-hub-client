"use client";

import { useEffect, useState } from "react";

export default function ManageUsers() {

    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");



    useEffect(() => {

        fetch("https://resell-hub-server.onrender.com/users")
            .then(res => res.json())
            .then(data => setUsers(data));

    }, []);



    const handleStatus = async (id, status) => {

        const res = await fetch(

            `https://resell-hub-server.onrender.com/users/${id}`,

            {

                method: "PATCH",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify({

                    status

                })

            }

        );


        const data = await res.json();


        if (data.modifiedCount > 0) {


            const updated = users.map(user =>

                user._id === id

                    ?

                    {

                        ...user,

                        status

                    }

                    :

                    user

            );


            setUsers(updated);

        }

    };




    const handleDelete = async (id) => {


        const confirmDelete = confirm(

            "Delete User?"

        );


        if (!confirmDelete) return;


        const res = await fetch(

            `https://resell-hub-server.onrender.com/users/${id}`,

            {

                method: "DELETE"

            }

        );


        const data = await res.json();


        if (data.deletedCount > 0) {


            alert(

                "User Deleted"

            );


            setUsers(

                users.filter(

                    user => user._id !== id

                )

            );

        }

    };




    const filteredUsers = users.filter(user =>

        user.name?.toLowerCase()

            .includes(

                search.toLowerCase()

            )

    );



    return (

        <div>


            <h1 className="text-3xl font-bold mb-6">

                Manage Users

            </h1>



            <input

                type="text"

                placeholder="Search User"

                value={search}

                onChange={(e) =>

                    setSearch(

                        e.target.value

                    )

                }

                className="input input-bordered w-full mb-5"

            />



            <div className="bg-white p-4 rounded-xl shadow-lg overflow-x-auto">


                <table className="table">


                    <thead>

                        <tr>

                            <th>#</th>

                            <th>Name</th>

                            <th>Email</th>

                            <th>Status</th>

                            <th>Action</th>

                        </tr>

                    </thead>



                    <tbody>



                        {

                            filteredUsers.map(

                                (user, index) => (


                                    <tr key={user._id}>


                                        <td>

                                            {index + 1}

                                        </td>



                                        <td>

                                            {user.name}

                                        </td>



                                        <td>

                                            {user.email}

                                        </td>



                                        <td>


                                            <span

                                                className={`badge

                                                ${user.status === "blocked"

                                                        ?

                                                        "badge-error"

                                                        :

                                                        "badge-success"

                                                    }

                                                `}

                                            >


                                                {

                                                    user.status ||

                                                    "active"

                                                }


                                            </span>


                                        </td>




                                        <td>



                                            {

                                                user.status === "blocked"

                                                    ?

                                                    <button


                                                        onClick={() =>

                                                            handleStatus(

                                                                user._id,

                                                                "active"

                                                            )

                                                        }


                                                        className="btn btn-xs btn-success mr-2"

                                                    >


                                                        Unblock


                                                    </button>

                                                    :

                                                    <button


                                                        onClick={() =>

                                                            handleStatus(

                                                                user._id,

                                                                "blocked"

                                                            )

                                                        }


                                                        className="btn btn-xs btn-warning mr-2"

                                                    >


                                                        Block


                                                    </button>


                                            }




                                            <button


                                                onClick={() =>

                                                    handleDelete(

                                                        user._id

                                                    )

                                                }


                                                className="btn btn-xs btn-error"


                                            >


                                                Delete


                                            </button>



                                        </td>



                                    </tr>

                                )

                            )

                        }



                    </tbody>



                </table>



            </div>



        </div>

    );

}