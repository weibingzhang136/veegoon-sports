export default function HeroVisual() {
  return (
    <div className="relative flex h-[520px] w-full items-center justify-center">

      {/* Main Circle */}
      <div className="absolute h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />


      {/* Data Core */}
      <div className="relative flex h-64 w-64 items-center justify-center rounded-full border border-blue-200 bg-white/50 backdrop-blur-xl">

        <div className="text-center">

          <div className="text-sm font-semibold tracking-widest text-blue-600">
            AI SPORTS
          </div>

          <div className="mt-3 text-4xl font-bold text-gray-900">
            DATA
          </div>

          <div className="mt-2 text-sm text-gray-500">
            Intelligent Sports Network
          </div>

        </div>

      </div>


      {/* Floating Cards */}

      <div className="absolute left-8 top-20 rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-lg">

        <div className="text-xs text-gray-500">
          AI Analysis
        </div>

        <div className="mt-1 text-xl font-bold text-blue-600">
          98.6%
        </div>

      </div>


      <div className="absolute bottom-20 right-8 rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-lg">

        <div className="text-xs text-gray-500">
          Smart Stadium
        </div>

        <div className="mt-1 text-xl font-bold text-blue-600">
          Connected
        </div>

      </div>


    </div>
  );
}