"use client";

import { useEffect, useState } from "react";

export default function Profile() {

    const [user, setUser] = useState({});

    useEffect(() => {

        fetch("https://resell-hub-server.onrender.com//users")

            .then(res => res.json())

            .then(data => {

                if (data.length > 0) {

                    setUser(data[0]);

                }

            });

    }, []);



    const handleUpdate = async (e) => {

        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const phone = form.phone.value;
        const address = form.address.value;
        const photo = form.photo.value;


        const updatedUser = {

            name,
            phone,
            address,
            photo

        };


        const res = await fetch(

            `https://resell-hub-server.onrender.com//update-profile/${user._id}`,

            {

                method: "PATCH",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify(updatedUser)

            }

        );


        const data = await res.json();


        if (data.modifiedCount > 0) {

            alert("Profile Updated");

            setUser({

                ...user,

                ...updatedUser

            });

        }

    };



    return (

        <div>

            <h1 className="text-4xl font-bold mb-6">

                Profile

            </h1>



            <div className="bg-white p-6 rounded-xl shadow max-w-2xl">


                <form

                    onSubmit={handleUpdate}

                    className="space-y-4"

                >


                    <input

                        name="name"

                        defaultValue={user?.name || ""}

                        placeholder="Name"

                        className="input input-bordered w-full"

                    />




                    <input

                        name="phone"

                        defaultValue={user?.phone || ""}

                        placeholder="Phone"

                        className="input input-bordered w-full"

                    />




                    <input

                        name="address"

                        defaultValue={user?.address || ""}

                        placeholder="Address"

                        className="input input-bordered w-full"

                    />




                    <input

                        name="photo"

                        defaultValue={user?.photo || user?.image || ""}

                        placeholder="Photo URL"

                        className="input input-bordered w-full"

                    />


                    {

                        (user?.photo || user?.image) && (

                            <img

                                src={user.photo || user.image}

                                alt="profile"

                                className="w-24 h-24 rounded-full mx-auto object-cover"

                            />

                        )

                    }



                    <button

                        className="btn btn-info text-white w-full"

                    >

                        Update Profile

                    </button>



                </form>


            </div>


        </div>

    )

}