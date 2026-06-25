import Link from "next/link";
import {
    Recycle,
    ShieldCheck,
    DollarSign,
    ShoppingBag
} from "lucide-react";

export default function AboutPage() {

    return (

        <section className="bg-[#0F172A] min-h-screen text-black">


            {/* Hero */}

            <div className="max-w-7xl mx-auto px-5 py-20 text-center">


                <h1 className="text-5xl font-bold">

                    About Us

                </h1>


                <p className="mt-5 max-w-3xl mx-auto text-gray-300 leading-8">


                    ReSell Hub is a trusted second-hand marketplace
                    that empowers people to buy and sell quality
                    pre-owned products safely while promoting
                    sustainability and affordable shopping.


                </p>



                <Link href="/products">


                    <button className="mt-8 bg-purple-600 hover:bg-purple-700 px-7 py-3 rounded-xl font-semibold">

                        Explore Products

                    </button>

                </Link>


            </div>



            {/* Why Choose */}


            <div className="max-w-7xl mx-auto px-5 py-16">


                <h2 className="text-4xl font-bold text-center mb-12">

                    Why Choose ReSell Hub

                </h2>




                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">



                    <div className="bg-[#171722] p-6 rounded-2xl border border-purple-500/20">


                        <Recycle size={40}
                            className="text-green-400 mb-4"
                        />

                        <h3 className="text-xl font-bold">

                            Sustainability

                        </h3>


                        <p className="mt-3 text-gray-400">


                            Reduce waste and encourage eco-friendly shopping.


                        </p>


                    </div>





                    <div className="bg-[#171722] p-6 rounded-2xl border border-purple-500/20">


                        <DollarSign
                            size={40}
                            className="text-yellow-400 mb-4"
                        />

                        <h3 className="text-xl font-bold">

                            Save Money

                        </h3>


                        <p className="mt-3 text-gray-400">

                            Buy quality products at affordable prices.


                        </p>


                    </div>






                    <div className="bg-[#171722] p-6 rounded-2xl border border-purple-500/20">


                        <ShoppingBag
                            size={40}
                            className="text-blue-400 mb-4"
                        />

                        <h3 className="text-xl font-bold">

                            Easy Selling

                        </h3>



                        <p className="mt-3 text-gray-400">

                            List unused items and earn extra income.


                        </p>


                    </div>







                    <div className="bg-[#171722] p-6 rounded-2xl border border-purple-500/20">


                        <ShieldCheck
                            size={40}
                            className="text-purple-400 mb-4"
                        />



                        <h3 className="text-xl font-bold">

                            Secure Transactions

                        </h3>


                        <p className="mt-3 text-gray-400">


                            Better Auth and Stripe ensure safe payments.


                        </p>



                    </div>


                </div>

            </div>





            {/* How It Works */}



            <div className="max-w-7xl mx-auto px-5 py-16">


                <h2 className="text-4xl font-bold text-center mb-12">

                    How It Works

                </h2>



                <div className="grid md:grid-cols-4 gap-6">


                    <div className="bg-[#171722] p-6 rounded-xl text-center">

                        1️⃣

                        <h3 className="mt-4 font-bold">

                            Create Account

                        </h3>

                    </div>




                    <div className="bg-[#171722] p-6 rounded-xl text-center">

                        2️⃣

                        <h3 className="mt-4 font-bold">

                            List Products

                        </h3>

                    </div>




                    <div className="bg-[#171722] p-6 rounded-xl text-center">

                        3️⃣

                        <h3 className="mt-4 font-bold">

                            Buyers Browse

                        </h3>

                    </div>





                    <div className="bg-[#171722] p-6 rounded-xl text-center">

                        4️⃣

                        <h3 className="mt-4 font-bold">

                            Secure Purchase

                        </h3>

                    </div>


                </div>



            </div>





            {/* Stats */}


            <div className="max-w-7xl mx-auto px-5 py-16">


                <h2 className="text-4xl font-bold text-center mb-12">

                    Marketplace Impact

                </h2>



                <div className="grid md:grid-cols-4 gap-6">



                    <div className="bg-[#171722] p-8 rounded-xl text-center">

                        <h1 className="text-4xl font-bold text-purple-400">

                            5K+

                        </h1>

                        Products


                    </div>





                    <div className="bg-[#171722] p-8 rounded-xl text-center">


                        <h1 className="text-4xl font-bold text-purple-400">

                            2K+

                        </h1>

                        Sellers


                    </div>





                    <div className="bg-[#171722] p-8 rounded-xl text-center">

                        <h1 className="text-4xl font-bold text-purple-400">

                            8K+

                        </h1>

                        Buyers


                    </div>





                    <div className="bg-[#171722] p-8 rounded-xl text-center">

                        <h1 className="text-4xl font-bold text-purple-400">

                            10K+

                        </h1>

                        Orders


                    </div>



                </div>


            </div>

        </section>

    );
}