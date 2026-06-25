"use client";

import { useEffect, useState } from "react";

export default function ManageProducts() {

const [products,setProducts]=useState([]);


useEffect(()=>{

fetch("https://resell-hub-server.onrender.com//admin-products")
.then(res=>res.json())
.then(data=>{

setProducts(data);

})

},[]);





const handleStatus=async(product)=>{


const status=

product.status==="approved"

? "rejected"

: "approved";



await fetch(

`https://resell-hub-server.onrender.com//admin-products/${product._id}`,

{

method:"PATCH",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

status

})

}

);




setProducts(

products.map(p=>

p._id===product._id

? {...p,status}

:p

)

);


};






const handleDelete=async(id)=>{


const ok=confirm("Delete Product?");


if(!ok)return;



await fetch(

`https://resell-hub-server.onrender.com//admin-products/${id}`,

{

method:"DELETE"

}

);




setProducts(

products.filter(

p=>p._id!==id

)

);


};






return(



<div>


<h1 className="text-4xl font-bold mb-6">

Manage Products

</h1>





<div className="overflow-x-auto bg-white rounded-xl shadow-lg p-4">


<table className="table">


<thead>


<tr>

<th>#</th>

<th>Product</th>

<th>Category</th>

<th>Price</th>

<th>Status</th>

<th>Action</th>

</tr>


</thead>





<tbody>


{


products.map((product,index)=>(


<tr key={product._id}>


<td>

{index+1}

</td>




<td>

{product.title}

</td>




<td>

{product.category}

</td>




<td>

৳ {product.price}

</td>





<td>


<span


className={`badge


${product.status==="approved"

? "badge-success"

: ""}


${product.status==="rejected"

? "badge-error"

: ""}


${product.status==="available"

? "badge-info"

: ""}



`}



>


{product.status}


</span>



</td>





<td>



<button


onClick={()=>handleStatus(product)}



className={`btn btn-xs mr-2



${product.status==="approved"

? "btn-warning"

: "btn-success"



}



`}



>



{

product.status==="approved"

? "Reject"

: "Approve"

}



</button>





<button


onClick={()=>handleDelete(product._id)}



className="btn btn-xs btn-error"



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



)


}