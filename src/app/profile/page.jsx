"use client";

import Image from "next/image";
import { useSession } from "@/lib/auth-client";

export default function ProfilePage() {

  const { data: session } = useSession();

  return (

    <section className="max-w-5xl mx-auto px-4 py-20">

      <div className="bg-white rounded-3xl shadow-xl p-8">

        <h1 className="text-4xl font-bold mb-10">
          Profile Settings
        </h1>


        <div className="grid md:grid-cols-3 gap-10">


          {/* Left */}

          <div className="flex flex-col items-center">


            <Image
              src={session?.user?.image || "/profile.jpg"}
              width={150}
              height={150}
              alt="profile"
              className="rounded-full border-4 border-cyan-400 object-cover"
            />


            <button className="btn btn-info mt-5">

              Change Photo

            </button>

          </div>




          {/* Right */}

          <div className="md:col-span-2">


            <div className="space-y-5">


              <div>

                <label className="font-semibold">
                  Name
                </label>

                <input

                  className="input input-bordered w-full mt-2"

                  value={session?.user?.name || "Afrin"}

                  readOnly
                />

              </div>



              <div>

                <label className="font-semibold">
                  Email
                </label>

                <input

                  className="input input-bordered w-full mt-2"

                  value={
                    session?.user?.email ||
                    "rukshana@example.com"
                  }

                  readOnly
                />

              </div>



              <div>

                <label className="font-semibold">

                  Phone

                </label>

                <input

                  className="input input-bordered w-full mt-2"

                  defaultValue="+8801700000000"

                />

              </div>




              <div>

                <label className="font-semibold">

                  Address

                </label>

                <textarea

                  className="textarea textarea-bordered w-full mt-2"

                  defaultValue="Dhaka, Bangladesh"

                />

              </div>



              <div className="flex gap-4 mt-8">


                <button className="btn btn-info">

                  Edit Profile

                </button>



                <button className="btn btn-outline">

                  Change Password

                </button>



              </div>


            </div>


          </div>


        </div>


      </div>


    </section>

  );

}