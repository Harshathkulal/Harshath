"use client";

import React from "react";
import { LuLoader } from "react-icons/lu";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#080809]">
      <LuLoader className="w-10 h-10 animate-spin text-neutral-400" />
    </div>
  );
};

export default Loader;
