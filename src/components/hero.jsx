
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-5xl font-extrabold tracking-tight mb-4">Welcome to <span className="text-blue-500">AnmolxLabs</span></h1>
      <p className="text-lg max-w-xl mb-6 text-gray-300">
        Building powerful tools, toolkits, and templates for students and startups. Empowering the next generation of creators.
      </p>
      <Button className="flex gap-2 bg-blue-600 hover:bg-blue-700 transition">
        Get Started
        <ArrowRight className="w-4 h-4" />
      </Button>
    </main>
  );
}

export default App;
