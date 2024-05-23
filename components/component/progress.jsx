"use client";

import React, { useEffect, useState } from "react";

const ProgressBar = ({ targetProgress }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress < targetProgress) {
      const timer = setTimeout(() => setProgress(progress + 1), 20);
      return () => clearTimeout(timer);
    }
  }, [progress, targetProgress]);

  return (
    <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
      <div
        className="bg-green-400 h-full text-center text-white transition-width duration-500 ease-in-out pl-6"
        style={{ width: `${progress}%` }}
      >
        {progress}%
      </div>
    </div>
  );
};

export default ProgressBar;
