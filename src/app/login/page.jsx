"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function LoginPage() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);



  const handleLogin = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      const res = await authClient.signIn.email({

        email,

        password,

      });


      if (res) {

        alert("Login Successful");

        router.push("/");

      }

    } catch (err) {

      alert("Invalid Credentials");

      console.log(err);

    }

    setLoading(false);

  };



  return (

<section className="min-h-screen flex items-center justify-center bg-[#0f172a] px-4 py-10">

<div className="w-full max-w-5xl grid lg:grid-cols-2 rounded-3xl overflow-hidden border border-purple-500/20 bg-[#171722]">



{/* Left */}

<div className="hidden lg:flex flex-col justify-center p-12 bg-gradient-to-br from-purple-900 to-black">

<h1 className="text-5xl font-bold text-white">

ReSell Hub

</h1>



<p className="mt-5 text-gray-300">

Buy, Sell and Reuse Products Easily.

</p>

</div>




{/* Right */}

<div className="p-8">



<h2 className="text-4xl font-bold text-white">

Welcome Back

</h2>


<p className="mt-2 text-gray-400">

Login to your account

</p>




<form
onSubmit={handleLogin}
className="space-y-4 mt-6"
>


<input

type="email"

placeholder="Email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

className="w-full rounded-xl bg-[#25304f] p-3 text-white outline-none"
/>



<input

type="password"

placeholder="Password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

className="w-full rounded-xl bg-[#25304f] p-3 text-white outline-none"
/>



<button

type="submit"

className="w-full p-3 rounded-xl bg-purple-300 text-white font-semibold"

>

{loading ? "Logging..." : "Login"}

</button>




<button

type="button"

className="w-full border border-gray-500 p-3 rounded-xl text-white"

>

Continue with Google

</button>




<p className="text-center text-gray-300">

Don't have an account?


<Link

href="/register"

className="text-purple-300 ml-2"

>

Register

</Link>

</p>


</form>


</div>

</div>

</section>

  );

}