"use client";

import {useEffect,useState} from "react";


export default function Settings(){


const [user,setUser]=useState({});

const [darkMode,setDarkMode]=useState(false);

const [notifications,setNotifications]=useState(true);

const [currentPassword,setCurrentPassword]=useState("");

const [newPassword,setNewPassword]=useState("");

const [confirmPassword,setConfirmPassword]=useState("");



useEffect(()=>{


fetch("https://resell-hub-server.onrender.com/users")

.then(res=>res.json())

.then(data=>{


const u=data[0];

setUser(u);

setDarkMode(u?.darkMode||false);

setNotifications(u?.notifications ?? true);


});


},[]);




const handleSave=async()=>{


if(

newPassword &&

newPassword!==confirmPassword

){

alert("Password not matched");

return;

}



const res=await fetch(

`https://resell-hub-server.onrender.com/settings/${user._id}`,

{


method:"PATCH",

headers:{


"Content-Type":"application/json"

},

body:JSON.stringify({


darkMode,

notifications


})



}



);


const data=await res.json();


if(data.modifiedCount>0){


alert("Settings Updated");


}



};






return(


<div>


<h1 className="text-4xl font-bold mb-6">

Settings

</h1>




<div className="bg-white p-6 rounded-xl shadow max-w-xl">


<div className="space-y-5">


<div className="flex justify-between">


<h2>Dark Mode</h2>


<input

type="checkbox"

checked={darkMode}

onChange={()=>setDarkMode(!darkMode)}

className="toggle toggle-info"

/>


</div>





<div className="flex justify-between">


<h2>Notifications</h2>


<input

type="checkbox"

checked={notifications}

onChange={()=>setNotifications(!notifications)}

className="toggle toggle-success"

/>



</div>





<div className="divider">

Change Password

</div>




<input

type="password"

placeholder="Current Password"

className="input input-bordered w-full"

value={currentPassword}

onChange={(e)=>setCurrentPassword(e.target.value)}

/>





<input

type="password"

placeholder="New Password"

className="input input-bordered w-full"

value={newPassword}

onChange={(e)=>setNewPassword(e.target.value)}

/>






<input

type="password"

placeholder="Confirm Password"

className="input input-bordered w-full"

value={confirmPassword}

onChange={(e)=>setConfirmPassword(e.target.value)}

/>





<button

onClick={handleSave}

className="btn btn-info w-full text-white"


>


Save Settings


</button>



</div>


</div>



</div>



);



}