"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {

const [orders,setOrders]=useState([]);
const [wishlist,setWishlist]=useState([]);
const [payments,setPayments]=useState([]);

const [revenue,setRevenue]=useState(0);


useEffect(()=>{


fetch("https://resell-hub-server.onrender.com/orders")
.then(res=>res.json())
.then(data=>setOrders(data));



fetch("https://resell-hub-server.onrender.com/wishlist")
.then(res=>res.json())
.then(data=>setWishlist(data));




fetch("https://resell-hub-server.onrender.com/payments")
.then(res=>res.json())
.then(data=>{


setPayments(data);



const total=data.reduce(

(sum,item)=>sum+(item.amount||0)

,0);


setRevenue(total);



});


},[]);




return(


<div>



<h1 className="text-4xl font-bold mb-8">

Dashboard Overview

</h1>





<div className="grid md:grid-cols-4 gap-6">



<div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-6 rounded-xl text-black shadow-lg">

<p>Total Orders</p>

<h1 className="text-4xl font-bold mt-2">

{orders.length}

</h1>

</div>





<div className="bg-gradient-to-r from-pink-500 to-rose-600 p-6 rounded-xl text-black shadow-lg">

<p>Wishlist</p>

<h1 className="text-4xl font-bold mt-2">

{wishlist.length}

</h1>

</div>






<div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 rounded-xl text-black shadow-lg">

<p>Payments</p>

<h1 className="text-4xl font-bold mt-2">

{payments.length}

</h1>

</div>







<div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-6 rounded-xl text-black shadow-lg">

<p>Revenue</p>

<h1 className="text-4xl font-bold mt-2">

৳ {revenue}

</h1>

</div>



</div>







<div className="bg-white rounded-xl shadow-lg p-6 mt-10">


<h2 className="text-2xl font-bold mb-6">

Recent Purchases

</h2>






<div className="overflow-x-auto">


<table className="table">


<thead>

<tr>

<th>#</th>

<th>Amount</th>

<th>Status</th>

</tr>


</thead>




<tbody>


{

payments.slice(0,5).map(

(payment,index)=>(


<tr key={payment._id}>


<td>

{index+1}

</td>



<td>

৳ {payment.amount}

</td>



<td>


<span className="badge badge-success">

Paid

</span>


</td>


</tr>


)

)


}



</tbody>



</table>



</div>




</div>





</div>



);


}