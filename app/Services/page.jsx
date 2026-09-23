"use client";
import React from 'react';

function Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-8 max-w-4xl mx-auto flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8 text-white">Services Offered</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        <button className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all shadow-md">
          Website Developer
        </button>
        <button className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-all shadow-md">
          FullStack Website Developer
        </button>
        <button className="px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-medium transition-all shadow-md">
          UI / UX Designer
        </button>
      </div>
    </div>
  );
}

export default Page;
