"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { Eye, EyeOff } from "lucide-react";

export default function RegisterForm() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const location = form.location.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {

      await authClient.signUp.email({
        email,
        password,
        name,
      });

      alert("Account Created Successfully");

      router.push("/");

    } catch (err) {
      setError(err.message || "Something went wrong");
    }

    setLoading(false);
  };


  // Google signup

  const handleGoogleLogin = async () => {
 
     try {
 
       await authClient.signIn.social({
 
         provider: "google",
 
         callbackURL: "https://resell-hub-server.onrender.com",
 
       });
 
     } catch (error) {
 
       console.log(error);
       alert("Google Login Failed");
 
     }
 
   };


  return (

    <section className="flex items-center justify-center px-4 py-6 bg-[#0F172A]">


      <div className="w-full max-w-4xl max-auto mb-16 grid lg:grid-cols-2 rounded-3xl overflow-hidden border border-purple-500/20 bg-[#171722] shadow-xl">



        {/* Left Side */}


        <div className="hidden lg:flex flex-col justify-center p-8 bg-gradient-to-br from-purple-900 to-black">

          <h1 className="text-5xl font-bold text-white">

            ReSell Hub

          </h1>

          <p className="mt-5 text-gray-300 leading-8">

            Buy, Sell and Reuse Products Easily.
            Join thousands of users making smart purchases.

          </p>

        </div>






        {/* Right Side */}



        <div className="p-5">

          <h2 className="text-3xl font-bold text-white">

            Create Account

          </h2>


          <p className="mt-2 text-gray-400">

            Join the marketplace today

          </p>



          <form
            onSubmit={handleRegister}
            className="mt-5 space-y-2"
          >



            <input
              name="name"
              type="text"
              placeholder="Full Name"
              required
              className="w-full h-10 px-3 rounded-xl bg-[#222232] border border-purple-500/20 text-white outline-none"
            />



            <input
              name="email"
              type="email"
              placeholder="Email Address"
              required
              className="w-full h-10 px-3 rounded-xl bg-[#222232] border border-purple-500/20 text-white outline-none"
            />



            <input
              name="location"
              type="text"
              placeholder="Location"
              className="w-full h-10 px-3 rounded-xl bg-[#222232] border border-purple-500/20 text-white outline-none"
            />




            <input
              name="photo"
              type="text"
              placeholder="Photo URL"
              className="w-full h-10 px-3 rounded-xl bg-[#222232] border border-purple-500/20 text-white outline-none"
            />





            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
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




            <div className="relative">
              <input
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                required
                className="w-full h-10 px-3 rounded-xl bg-[#222232] border border-purple-500/20 text-white outline-none"
              />

              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                {showConfirmPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>



            {error && (

              <p className="text-red-500 text-sm">

                {error}

              </p>

            )}





            <button
              disabled={loading}
              className="w-full bg-purple-600 hover:bg-purple-700 h-10 rounded-xl text-white font-semibold"
            >

              {

                loading

                  ?

                  "Creating..."

                  :

                  "Create Account"

              }

            </button>






            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full border border-purple-500 h-10 rounded-xl text-purple-300 hover:bg-purple-500 hover:text-white transition"
            >

              Continue with Google

            </button>





            <p className="text-center text-gray-400">


              Already have an account?



              <Link

                href="/login"

                className="text-purple-400 ml-2"

              >

                Login

              </Link>


            </p>



          </form>



        </div>



      </div>


    </section>

  );

}