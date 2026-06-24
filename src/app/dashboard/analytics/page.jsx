"use client";

import {

BarChart,
Bar,
LineChart,
Line,
PieChart,
Pie,
Cell,

XAxis,
YAxis,
CartesianGrid,
Tooltip,
ResponsiveContainer

} from "recharts";



const userData=[

{name:"Jan",users:20},
{name:"Feb",users:35},
{name:"Mar",users:45},
{name:"Apr",users:60},
{name:"May",users:80},

];



const orderData=[

{name:"Jan",orders:10},
{name:"Feb",orders:25},
{name:"Mar",orders:40},
{name:"Apr",orders:50},
{name:"May",orders:70},

];




const categoryData=[

{name:"Electronics",value:40},

{name:"Fashion",value:25},

{name:"Furniture",value:20},

{name:"Vehicles",value:15},

];



const COLORS=[

"#06B6D4",

"#EC4899",

"#3B82F6",

"#10B981"

];



export default function Analytics(){



return(


<div>


<h1 className="text-4xl font-bold mb-8">

Analytics

</h1>





<div className="grid md:grid-cols-2 gap-6">





<div className="bg-white p-5 rounded-xl shadow">


<h2 className="font-bold mb-4">

User Growth

</h2>



<ResponsiveContainer

width="100%"

height={300}

>


<BarChart data={userData}>


<CartesianGrid strokeDasharray="3 3"/>

<XAxis dataKey="name"/>

<YAxis/>

<Tooltip/>


<Bar

dataKey="users"

fill="#06B6D4"

/>



</BarChart>



</ResponsiveContainer>


</div>







<div className="bg-white p-5 rounded-xl shadow">


<h2 className="font-bold mb-4">

Monthly Orders

</h2>



<ResponsiveContainer

width="100%"

height={300}

>


<LineChart data={orderData}>


<CartesianGrid strokeDasharray="3 3"/>


<XAxis dataKey="name"/>

<YAxis/>


<Tooltip/>


<Line

type="monotone"

dataKey="orders"

stroke="#EC4899"

/>



</LineChart>



</ResponsiveContainer>


</div>









<div className="bg-white p-5 rounded-xl shadow md:col-span-2">



<h2 className="font-bold mb-4">

Top Categories

</h2>




<ResponsiveContainer

width="100%"

height={300}

>



<PieChart>



<Pie

data={categoryData}

dataKey="value"

label



>


{

categoryData.map(

(entry,index)=>(


<Cell

key={index}

fill={COLORS[index]}

/>

)

)

}


</Pie>




<Tooltip/>


</PieChart>




</ResponsiveContainer>



</div>




</div>



</div>

)



}