"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function FeaturedProducts() {

const [products,setProducts]=useState([]);

useEffect(()=>{

fetch("http://localhost:5000/featured-products")
.then(res=>res.json())
.then(data=>setProducts(data));

},[]);


return(

<section className="max-w-7xl mx-auto py-20">

<h2 className="text-4xl font-bold text-center mb-12">

Featured Products

</h2>


<div className="grid md:grid-cols-4 gap-6">


{

products.map(product=>(


<div
key={product._id}
className="bg-white rounded-xl shadow-md overflow-hidden"
>


<Image
src={product.images[0]}
width={400}
height={250}
alt={product.title}
className="w-full h-52 object-cover"
/>


<div className="p-4">


<h3 className="font-bold text-lg text-slate-900 dark:text-white">

{product.title}

</h3>


<p className="text-slate-600 dark:text-slate-300">

{product.category}

</p>


<p className="font-bold text-cyan-500 dark:text-cyan-400">

৳ {product.price}

</p>


<p className="text-yellow-500">

⭐ {product.rating}

</p>


</div>


</div>

))

}



</div>

</section>


)

}