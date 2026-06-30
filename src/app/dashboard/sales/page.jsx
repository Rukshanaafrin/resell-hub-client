"use client";

import RoleRoute from "@/components/RoleRoute";

import {
BarChart,
Bar,
XAxis,
YAxis,
CartesianGrid,
Tooltip,
ResponsiveContainer
} from "recharts";


export default function Sales(){



const salesData=[

{
month:"Jan",
sales:12000
},

{
month:"Feb",
sales:18000
},

{
month:"Mar",
sales:24000
},

{
month:"Apr",
sales:21000
},

{
month:"May",
sales:30000
},

{
month:"Jun",
sales:27000
}

];



const topProducts=[

{

name:"Dell Inspiron",
sales:25

},

{

name:"Samsung S23",
sales:18

},

{

name:"Nike Air Max",
sales:14

},

{

name:"Canon EOS",
sales:11

}

]



return(

    <RoleRoute role="seller">


<div>



<h1 className="text-4xl font-bold mb-6">

Sales Report

</h1>





<div className="grid md:grid-cols-3 gap-6 mb-8">



<div className="bg-white p-6 rounded-xl shadow">


<h2 className="text-gray-500">

Total Revenue

</h2>


<p className="text-3xl font-bold text-cyan-500">

৳1,34,000

</p>


</div>





<div className="bg-white p-6 rounded-xl shadow">


<h2 className="text-gray-500">

Total Sales

</h2>


<p className="text-3xl font-bold text-green-500">

86

</p>


</div>





<div className="bg-white p-6 rounded-xl shadow">


<h2 className="text-gray-500">

Pending Orders

</h2>


<p className="text-3xl font-bold text-pink-500">

14

</p>


</div>



</div>






<div className="bg-white p-6 rounded-xl shadow mb-8">


<h2 className="font-bold text-xl mb-5">

Monthly Sales Trend

</h2>



<ResponsiveContainer
width="100%"
height={350}
>



<BarChart data={salesData}>


<CartesianGrid strokeDasharray="3 3"/>


<XAxis dataKey="month"/>


<YAxis/>


<Tooltip/>


<Bar
dataKey="sales"
fill="#06b6d4"
/>


</BarChart>



</ResponsiveContainer>



</div>






<div className="bg-white p-6 rounded-xl shadow">


<h2 className="text-xl font-bold mb-5">

Top Selling Products

</h2>



{


topProducts.map((item,index)=>(



<div

key={index}

className="flex justify-between border-b py-3"

>


<p>

{item.name}

</p>



<p className="font-semibold text-cyan-500">

{item.sales} Sold

</p>



</div>



))


}



</div>



</div>

</RoleRoute>

)


}