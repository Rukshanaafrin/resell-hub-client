"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

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

        // JWT Token Generate

        const tokenRes = await fetch("https://resell-hub-server.onrender.com/jwt", {

          method: "POST",

          headers: {
            "content-type": "application/json"
          },

          body: JSON.stringify({

            email

          })

        })


        const data = await tokenRes.json();


        localStorage.setItem(

          "access-token",

          data.token

        );


        alert("Login Successful");


        router.push("/");


      }

    } catch (err) {

      alert("Invalid Credentials");

      console.log(err);

    }

    setLoading(false);

  };

  // Google signup 

  const handleGoogleLogin = async () => {

    try {

      await authClient.signIn.social({

        provider: "google",

        // callbackURL: "https://resell-hub-client-blond.vercel.app",

      });

    } catch (error) {

      console.log(error);
      alert("Google Login Failed");

    }

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

              onChange={(e) => setEmail(e.target.value)}

              className="w-full rounded-xl bg-[#25304f] p-3 text-white outline-none"
            />



            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="w-full h-10 px-3 rounded-xl bg-[#222232] border border-purple-500/20 text-white outline-none"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>




            <button

              type="submit"

              className="w-full p-3 rounded-xl bg-blue-500 text-white font-semibold"

            >

              {loading ? "Logging..." : "Login"}

            </button>




            <button
              type="button"
              onClick={handleGoogleLogin}
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