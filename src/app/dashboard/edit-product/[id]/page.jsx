"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditProduct() {

    const { id } = useParams();
    const router = useRouter();

    const [product, setProduct] = useState({
        title: "",
        category: "",
        condition: "",
        price: "",
        image: "",
        description: "",
        stock: "",
        status: "available"
    });


    useEffect(() => {

        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => {

                setProduct({

                    title: data.title || "",

                    category: data.category || "",

                    condition: data.condition || "",

                    price: data.price || "",

                    image: data.images?.[0] || "",

                    description: data.description || "",

                    stock: data.stock || "",

                    status: data.status || "available"

                });

            });

    }, [id]);


    const handleChange = (e) => {

        setProduct({

            ...product,

            [e.target.name]: e.target.value

        });

    };


    const handleSubmit = async (e) => {

        e.preventDefault();

        const updatedProduct = {

            title: product.title,

            category: product.category,

            condition: product.condition,

            price: Number(product.price),

            images: [product.image],

            description: product.description,

            stock: Number(product.stock),

            status: product.status

        };


        const res = await fetch(

            `http://localhost:5000/products/${id}`,

            {

                method: "PUT",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify(updatedProduct)

            }

        );


        const data = await res.json();


        if (data.modifiedCount > 0) {

            alert("✅ Product Updated Successfully");

            router.push("/dashboard/my-products");

        }

    };


    return (

        <div>

            <h1 className="text-3xl font-bold mb-6">

                Edit Product

            </h1>


            <div className="bg-slate-200 rounded-xl p-6">


                <form

                    onSubmit={handleSubmit}

                    className="space-y-4"

                >


                    <input

                        name="title"

                        value={product.title}

                        onChange={handleChange}

                        placeholder="Product Title"

                        className="input input-bordered w-full"

                    />


                    <input

                        name="category"

                        value={product.category}

                        onChange={handleChange}

                        placeholder="Category"

                        className="input input-bordered w-full"

                    />


                    <select

                        name="condition"

                        value={product.condition}

                        onChange={handleChange}

                        className="select select-bordered w-full"

                    >

                        <option>Like New</option>

                        <option>Good</option>

                        <option>Refurbished</option>

                    </select>



                    <input

                        name="price"

                        value={product.price}

                        onChange={handleChange}

                        type="number"

                        placeholder="Price"

                        className="input input-bordered w-full"

                    />


                    <input

                        name="image"

                        value={product.image}

                        onChange={handleChange}

                        placeholder="Image URL"

                        className="input input-bordered w-full"

                    />


                    <textarea

                        name="description"

                        value={product.description}

                        onChange={handleChange}

                        rows="4"

                        placeholder="Description"

                        className="textarea textarea-bordered w-full"

                    />


                    <input

                        name="stock"

                        value={product.stock}

                        onChange={handleChange}

                        type="number"

                        placeholder="Stock"

                        className="input input-bordered w-full"

                    />


                    <select

                        name="status"

                        value={product.status}

                        onChange={handleChange}

                        className="select select-bordered w-full"

                    >

                        <option value="available">

                            Available

                        </option>

                        <option value="sold">

                            Sold

                        </option>

                    </select>



                    <button

                        className="btn btn-info"

                    >

                        Update Product

                    </button>


                </form>


            </div>


        </div>

    );

}