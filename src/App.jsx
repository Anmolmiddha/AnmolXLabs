import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-extrabold tracking-tight">
          Welcome to <span className="text-blue-500">AnmolxLabs</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-md mx-auto">
          Building powerful tools, toolkits, and templates for students and startups.
        </p>
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-lg transition duration-300 shadow-md">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;

