import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="bg-[#0F172A] min-h-screen py-16 px-5">

      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">

          <h1 className="text-5xl font-bold text-black">

            Contact Us

          </h1>

          <p className="text-gray-400 mt-4">

            We'd love to hear from you. Get in touch with us.

          </p>

        </div>



        <div className="grid lg:grid-cols-2 gap-8">


          {/* Contact Information */}

          <div className="bg-[#171722] p-8 rounded-3xl border border-purple-500/20">

            <h2 className="text-3xl font-bold text-black mb-8">

              Get In Touch

            </h2>


            <div className="space-y-6">


              <div className="flex items-center gap-4">

                <Mail className="text-cyan-400" />

                <div>

                  <h3 className="text-black font-semibold">

                    Email

                  </h3>

                  <p className="text-gray-400">

                    support@resellhub.com

                  </p>

                </div>

              </div>




              <div className="flex items-center gap-4">

                <Phone className="text-cyan-400" />

                <div>

                  <h3 className="text-black font-semibold">

                    Phone

                  </h3>

                  <p className="text-gray-400">

                    +8801712345678

                  </p>

                </div>

              </div>




              <div className="flex items-center gap-4">

                <MapPin className="text-cyan-400" />

                <div>

                  <h3 className="text-black font-semibold">

                    Address

                  </h3>

                  <p className="text-gray-400">

                    Dhaka, Bangladesh

                  </p>

                </div>

              </div>

            </div>

          </div>



          {/* Form */}


          <div className="bg-[#171722] p-8 rounded-3xl border border-purple-500/20">


            <h2 className="text-3xl font-bold text-black mb-8">

              Send Message

            </h2>



            <form className="space-y-5">


              <input
                type="text"
                placeholder="Your Name"
                className="w-full h-12 rounded-xl bg-[#222232] px-4 text-black outline-none"
              />



              <input
                type="email"
                placeholder="Your Email"
                className="w-full h-12 rounded-xl bg-[#222232] px-4 text-black outline-none"
              />



              <textarea
                rows={5}
                placeholder="Message"
                className="w-full rounded-xl bg-[#222232] p-4 text-black outline-none"
              />



              <button
                className="w-full h-12 rounded-xl bg-purple-600 hover:bg-purple-700 text-black font-semibold"
              >

                Send Message

              </button>



            </form>

          </div>


        </div>


      </div>


    </section>
  );
}