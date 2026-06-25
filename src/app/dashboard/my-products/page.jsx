"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function MyProducts() {

  const [products, setProducts] = useState([]);


  const handleDelete = async (id) => {

    const confirmDelete = confirm("Delete Product?");

    if (!confirmDelete) return;

    const res = await fetch(
      `https://resell-hub-server.onrender.com/products/${id}`,
      {
        method: "DELETE",
      }
    );

    const data = await res.json();

    if (data.deletedCount > 0) {

      alert("Deleted Successfully");

      setProducts(
        products.filter(
          product => product._id !== id
        )
      );
    }

  };


  useEffect(() => {

    fetch("https://resell-hub-server.onrender.com/my-products")

      .then(res => res.json())

      .then(data => {

        setProducts(data);

      });

  }, []);



  return (

    <div>

      <h1 className="text-3xl font-bold mb-6">

        My Products

      </h1>



      <div className="bg-white rounded-xl shadow-lg overflow-x-auto w-full p-4">


        <table className="table">


          <thead>

            <tr>

              <th>#</th>

              <th>Name</th>

              <th>Price</th>

              <th>Status</th>

              <th>Stock</th>

              <th>Action</th>

            </tr>

          </thead>



          <tbody>


            {

              products.map((product, index) => (


                <tr key={product._id}>


                  <td>

                    {index + 1}

                  </td>


                  <td>

                    {product.title}

                  </td>


                  <td>

                    ৳ {product.price}

                  </td>



                  <td>


                    <span


                      className={`badge


                      ${product.status === "sold"

                          ?

                          "badge-error"

                          :

                          "badge-success"


                        }


                      `}


                    >

                      {product.status}

                    </span>


                  </td>



                  <td>

                    {product.stock}

                  </td>



                  <td>


                    <Link href={`/dashboard/edit-product/${product._id}`}>

                      <button

                        className="btn btn-sm btn-info mr-2"

                      >

                        Edit

                      </button>

                    </Link>


                    <button

                      onClick={() => handleDelete(product._id)}

                      className="btn btn-sm btn-error"

                    >

                      Delete

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