// import Quiz from "@/components/Quiz";
import StyleQuiz from "@/components/StyleQuiz";
import React from "react";

const page = () => {
  return (
    <div className="container">
      <div className="mt-12">
        <h2 className="font-semibold text-xl">Fashion Style Quiz</h2>
        <p>
          Answer the questions below to uncover your personal fashion style.
        </p>
      </div>

      <StyleQuiz />
    </div>
  );
};

export default page;
