export default function ProductSkeleton() {

    return (

        <div className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse">

            <div className="h-52 bg-slate-300"></div>

            <div className="p-4">

                <div className="h-5 bg-slate-300 rounded"></div>

                <div className="mt-3 h-4 w-1/2 bg-slate-300 rounded"></div>

                <div className="mt-3 h-4 w-1/3 bg-slate-300 rounded"></div>

                <div className="mt-5 h-8 bg-slate-300 rounded"></div>

            </div>

        </div>

    );

}