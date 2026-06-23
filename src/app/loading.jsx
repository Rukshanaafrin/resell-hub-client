export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0F172A] flex flex-col items-center justify-center">

      <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>

      <h2 className="mt-5 text-white text-2xl font-semibold">
        Loading...
      </h2>

      <div className="mt-16 grid md:grid-cols-3 gap-6">

        {[1, 2, 3].map((item) => (

          <div
            key={item}
            className="w-72 bg-[#171722] rounded-2xl p-4 animate-pulse"
          >

            <div className="h-44 bg-slate-700 rounded-xl"></div>

            <div className="mt-4 h-4 bg-slate-700 rounded"></div>

            <div className="mt-3 h-4 w-3/4 bg-slate-700 rounded"></div>

            <div className="mt-6 h-10 bg-slate-700 rounded-xl"></div>

          </div>

        ))}

      </div>

    </div>
  );
}