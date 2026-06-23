"use client";

import { useParams } from "next/navigation";

const sellers = [

{
id:1,
name:"Nusrat Jahan",
image:"https://i.pravatar.cc/150?img=25",
email:"nusrat@gmail.com",
rating:4.9,
products:56,
location:"Dhaka",
joined:"January 2024"
},

{
id:2,
name:"Rakib Hasan",
image:"https://i.pravatar.cc/150?img=12",
email:"rakib@gmail.com",
rating:4.8,
products:42,
location:"Khulna",
joined:"March 2024"
},

{
id:3,
name:"Sakib Ahmed",
image:"https://i.pravatar.cc/150?img=18",
email:"sakib@gmail.com",
rating:5,
products:71,
location:"Chittagong",
joined:"June 2024"
}

];


export default function SellerProfile(){

const params = useParams();

const seller = sellers.find(
item => item.id === Number(params.id)
);


if(!seller){

return <h1 className="text-center py-20">Seller not found</h1>

}



return(

<section className="max-w-5xl mx-auto py-20 px-4">


<div className="bg-white rounded-3xl shadow-xl p-10">



<div className="flex flex-col items-center">


<img
src={seller.image}
alt={seller.name}
className="w-36 h-36 rounded-full border-4 border-cyan-400 object-cover"
/>


<h1 className="text-3xl font-bold mt-5">

{seller.name}

</h1>


<p className="text-yellow-500">

⭐ {seller.rating}

</p>


</div>




<div className="grid md:grid-cols-2 gap-6 mt-10">


<div>

<h3 className="font-semibold">

Email

</h3>

<p>

{seller.email}

</p>

</div>



<div>

<h3 className="font-semibold">

Location

</h3>

<p>

{seller.location}

</p>

</div>



<div>

<h3 className="font-semibold">

Listings

</h3>

<p>

{seller.products} Products

</p>

</div>



<div>

<h3 className="font-semibold">

Joined

</h3>

<p>

{seller.joined}

</p>

</div>


</div>



<div className="mt-10">


<h2 className="text-2xl font-bold">

Reviews

</h2>


<div className="bg-slate-100 rounded-xl p-5 mt-3">

⭐ {seller.rating} Excellent Seller


</div>


</div>



</div>



</section>

);


}