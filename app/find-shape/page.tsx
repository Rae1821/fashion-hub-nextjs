import CalculateShape from "@/components/CalculateShape";
import React from "react";

const findShapePage = () => {
  return (
    <div className="container mt-12">
      <div className="mb-12">
        <h2 className="text-xl font-semibold">Find Your Body Shape</h2>
        <p>Answer the questions below to uncover your body shape.</p>
      </div>
      <div>
        <CalculateShape />
      </div>
    </div>
  );
};

export default findShapePage;
