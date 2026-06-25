import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0F172A] flex flex-col items-center justify-center px-5">

      <h1 className="text-8xl font-bold text-cyan-400">
        404
      </h1>

      <h2 className="mt-4 text-3xl font-bold text-black">
        Page Not Found
      </h2>

      <p className="mt-4 text-gray-400 text-center max-w-md">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      <Link href="/">
        <button className="mt-8 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl text-black font-semibold">
          Back To Home
        </button>
      </Link>

    </div>
  );
}