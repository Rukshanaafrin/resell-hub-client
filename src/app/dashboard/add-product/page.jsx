"use client";

import { useState } from "react";

export default function AddProduct() {

  const [product, setProduct] = useState({
    name: "",
    brand: "",
    price: "",
    category: "",
    image: "",
    description: "",
    condition: "Like New",
    stock: 1,
  });


  const handleChange = (e) => {

    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });

  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    const productData = {

      title: product.name,

      brand: product.brand,

      price: Number(product.price),

      category: product.category,

      images: [product.image],

      description: product.description,

      condition: product.condition,

      stock: Number(product.stock),

      status: "available",

      featured: true,

      rating: 4.5,

      createdAt: new Date(),

      sellerInfo: {
        name: "Mst. Rukshana Afrin",
        email: "rukshanaafrinity@gmail.com",
      },

    };


    try {

      const res = await fetch(
        "https://resell-hub-server.onrender.com/products",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(productData),
        }
      );

      const data = await res.json();


      if (data.insertedId) {

        alert("✅ Product Added Successfully");


        setProduct({

          name: "",

          brand: "",

          price: "",

          category: "",

          image: "",

          description: "",

          condition: "Like New",

          stock: 1,

        });

      }

    }

    catch (error) {

      console.log(error);

    }

  };


  return (

    <div>

      <h1 className="text-3xl font-bold mb-6">

        Add Product

      </h1>


      <div className="bg-slate-300 rounded-xl shadow-md p-6">

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >


          <input

            name="name"

            value={product.name}

            onChange={handleChange}

            type="text"

            placeholder="Product Name"

            className="input input-bordered rounded-xl w-full"

            required

          />


          <input

            name="brand"

            value={product.brand}

            onChange={handleChange}

            type="text"

            placeholder="Brand Name"

            className="input input-bordered rounded-xl w-full"

            required

          />


          <input

            name="price"

            value={product.price}

            onChange={handleChange}

            type="number"

            placeholder="Price"

            className="input input-bordered rounded-xl w-full"

            required

          />


          <input

            name="category"

            value={product.category}

            onChange={handleChange}

            type="text"

            placeholder="Category"

            className="input input-bordered rounded-xl w-full"

            required

          />


          <input

            name="image"

            value={product.image}

            onChange={handleChange}

            type="text"

            placeholder="Image URL"

            className="input input-bordered rounded-xl w-full"

            required

          />


          <textarea

            name="description"

            value={product.description}

            onChange={handleChange}

            placeholder="Description"

            rows="4"

            className="textarea textarea-bordered rounded-xl w-full"

            required

          />


          <button

            type="submit"

            className="btn bg-cyan-500 hover:bg-cyan-600 text-white rounded-xl"

          >

            Add Product

          </button>


        </form>

      </div>

    </div>

  );

}