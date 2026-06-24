"use client";

import { useEffect, useState } from "react";

export default function PaymentHistory() {

const [payments,setPayments]=useState([]);


useEffect(()=>{

fetch("http://localhost:5000/payments")
.then(res=>res.json())
.then(data=>setPayments(data));

},[]);



return(

<div>

<h1 className="text-4xl font-bold mb-6">

Payment History

</h1>


<div className="overflow-x-auto bg-white rounded-xl shadow p-4">


<table className="table">


<thead>

<tr>

<th>#</th>
<th>Buyer</th>
<th>Amount</th>
<th>Transaction ID</th>
<th>Date</th>
<th>Status</th>

</tr>

</thead>



<tbody>

{

payments.map((payment,index)=>(


<tr key={payment._id}>


<td>

{index+1}

</td>



<td>

{payment.buyer}

</td>



<td>

৳ {payment.amount}

</td>



<td>

{payment.transactionId}

</td>



<td>

{payment.date}

</td>



<td>


<span


className={`badge

${payment.status==="Paid" && "badge-success"}

${payment.status==="Pending" && "badge-warning"}

${payment.status==="Refunded" && "badge-error"}

`}


>


{payment.status}


</span>



</td>



</tr>

))

}


</tbody>



</table>


</div>



</div>

)

}