"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { questions } from "@/constants";
import Link from "next/link";
import { useState } from "react";
import CoolButton from "./CoolButton";
import { get } from "http";

type Answer = {
  index: number;
  answer: string;
  text: string;
};

const StyleQuiz = () => {
  const [result, setResult] = useState<string>("");
  const [answersArr, setAnswersArr] = useState<Answer[]>([]);
  const [styleObj, setStyleObj] = useState({});
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: string;
  }>({});

  const handleAnswerClick = (
    questionIndex: number,
    answerValue: string,
    textValue: string
  ) => {
    const answer: Answer = {
      index: questionIndex,
      answer: answerValue,
      text: textValue,
    };

    // The first answer is not being added to the answers array annd is then not counted in the styleObj so the result is not always correct. need to fix this

    setAnswersArr((prevAnswersArr) => {
      const existingAnswerIndex = prevAnswersArr.findIndex(
        (item) => item.index === questionIndex
      );

      if (existingAnswerIndex !== -1) {
        const updatedAnswers = [...prevAnswersArr];
        updatedAnswers[existingAnswerIndex].answer = answerValue;
        updatedAnswers[existingAnswerIndex].text = textValue;
        return updatedAnswers;
      } else {
        return [...prevAnswersArr, answer];
      }
    });
    // Update the selected answer for the specific question
    setSelectedAnswers((prevSelectedAnswers) => ({
      ...prevSelectedAnswers,
      [questionIndex]: textValue,
    }));

    // Debugging logs
    console.log("Selected Answers:", selectedAnswers);
    console.log("Answers Array:", answersArr);

    handleFindStyle();

    // Check if the answer already exists
    // const existingAnswerIndex = answersArr.findIndex(
    //   (item) => item.index === questionIndex
    // );

    // if (existingAnswerIndex !== -1) {
    //   // Update existing answer
    //   const updatedAnswers = [...answersArr];
    //   updatedAnswers[existingAnswerIndex].answer = answerValue;
    //   updatedAnswers[existingAnswerIndex].text = textValue;
    //   setAnswersArr(updatedAnswers);
    // } else {
    //   // Add new answer
    //   setAnswersArr([...answersArr, answer]);
    // }
    // console.log("Answers array", answersArr);
    // // Update the selected answer for the specific question
    // setSelectedAnswers((prev) => ({ ...prev, [questionIndex]: textValue }));

    // console.log("Selected Answers", selectedAnswers);

    // handleFindStyle();
  };

  const handleFindStyle = () => {
    const style = {
      Boho: 0,
      Chic: 0,
      Classic: 0,
      Edgy: 0,
      Sporty: 0,
    };

    answersArr.forEach((answerObj) => {
      const userAnswerValue = answerObj.answer;

      if (userAnswerValue === "boho") {
        style.Boho += 1;
      } else if (userAnswerValue === "chic") {
        style.Chic += 1;
      } else if (userAnswerValue === "classic") {
        style.Classic += 1;
      } else if (userAnswerValue === "edgy") {
        style.Edgy += 1;
      } else if (userAnswerValue === "sporty") {
        style.Sporty += 1;
      } else {
        return userAnswerValue;
      }

      setStyleObj(style);
    });
  };

  function getTheResult(obj: any) {
    let highestCategory = 0;
    let winningCategory = "";

    for (const style in obj) {
      if (obj[style] > highestCategory) {
        highestCategory = obj[style];
        winningCategory = style;
      }
    }
    return setResult(winningCategory);
  }

  function handleStartOver() {
    setStyleObj({});
    setResult("");
    setSelectedAnswers({});
    setAnswersArr([]);
  }

  return (
    <div className="container">
      <div id="quiz">
        {questions.map((option, i) => (
          <div key={i}>
            <p className="mb-2 mt-8 font-semibold md:text-lg">
              <span>{option.id}.</span>
              {option.text}
            </p>
            <div className="flex w-[275px] flex-col justify-center md:h-[47px] md:w-full md:flex-row md:items-center md:justify-start">
              {option.answers.map((answer, j) => (
                <p
                  className={`${
                    selectedAnswers[i] === answer.text
                      ? "bg-red-300"
                      : "bg-white"
                  } my-2 ml-4 flex  cursor-pointer rounded border-2 border-black px-2 py-1 text-center text-sm shadow hover:bg-red-300 hover:shadow-lg hover:transition-all focus:outline-none focus:ring-2`}
                  key={j}
                  onClick={() =>
                    handleAnswerClick(i, answer.value, answer.text)
                  }
                >
                  {answer.text}
                </p>
              ))}
            </div>
          </div>
        ))}
        <div className="mx-auto mt-8 flex w-full items-center gap-4 md:mx-0 md:w-1/2 md:flex-row">
          <Button
            size="lg"
            className="bg-red-300 border-4 border-black text-black  hover:bg-white hover:text-black rounded-none"
            onClick={() => {
              getTheResult(styleObj);
            }}
          >
            Get Your Style
          </Button>

          <Button variant="link" className=" md:ml-2" onClick={handleStartOver}>
            Start over
          </Button>
        </div>
      </div>
      {/* Display the result */}
      <div className="mt-12 h-[300px] w-full">
        {result && (
          <div id="result" className="h-24 w-full">
            <h2 className="text-2xl font-semibold">
              Your Fashion Style is: <span>{result}</span>
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default StyleQuiz;
