import React from "react";

export default function Hero() {
  return (
    <main className="bg-[linear-gradient(90deg,rgba(2,0,36,1)0%,rgba(9,9,121,1)26%,rgba(144,69,150,1)80%,rgba(199,119,180,1)94%)] rounded-b-2xl px-4 mx-auto flex items-center justify-center min-h-[calc(100vh-68px)] w-[calc(100%-16px)]">
      <div className="mt-4 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl">
        
        {/* Left Side */}
        <div className="flex-1 flex flex-col items-center justify-center gap-6 text-center md:items-start md:text-left">
          <div className="flex flex-col gap-2 md:gap-1">
            <h1 className="text-3xl text-slate-50 sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Sell your unused Software
            </h1>
            <h1 className="text-3xl text-slate-50 sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Licenses Easily
            </h1>
          </div>

          <p className="text-base md:text-lg max-w-md text-slate-400">
            Turn your unused software into cash in just a few clicks
          </p>

          <button className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:scale-105 transition-all duration-200 ease-in-out">
            Sell My Licenses
          </button>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex items-center justify-center mt-8 md:mt-0">
          <img
            src="/hero.png"
            alt="Software illustration"
            className="max-w-full h-auto border-0 outline-none"
          />
        </div>
      </div>
    </main>
  );
}
