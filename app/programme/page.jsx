import React from "react";
import ProgressBar from "@/components/component/progress";

const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-1/2">
        <h1 className="text-2xl font-bold mb-4 text-center text-green-400">
          En cours
        </h1>
        <ProgressBar targetProgress={70} />
      </div>
    </div>
  );
};

export default App;
