import Cards from "@/components/Cards/Cards";
import React from "react";

const page = () => {
  return (
    <div className="px-10">
      <div className="max-w-2xl mx-auto text-center space-y-2 mb-5">
        <h1 className="text-3xl font-semibold">Explore Our Full Collection</h1>
      </div>
      <Cards />
    </div>
  );
};

export default page;
