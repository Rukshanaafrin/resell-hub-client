"use client";

export default function RegisterForm() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 rounded-3xl overflow-hidden border border-purple-500/20 bg-[#171722]">

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
        <div className="p-6 md:p-10">

          <h2 className="text-3xl font-bold text-white">
            Create Account
          </h2>

          <p className="mt-2 text-gray-400">
            Join the marketplace today
          </p>

        </div>

      </div>
    </section>
  );
}