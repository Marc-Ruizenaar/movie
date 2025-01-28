import React, { useState } from "react";
import "./QandA.css";
import "../HomePage.css";
import minus from "../homePageImages/mobileImages/minus.png";
import plus from "../homePageImages/mobileImages/plus.png";

const QandA = () => {
  const [questions, setQuestions] = useState([
    {
      index: "01",
      toggle: false,
      topic: "How do I get started?",
      answer:
        "To get started with StreamVibe, simply create an account by providing a username, email address, and password. Once you've created your account, you'll be able to access your device's settings, control your streaming experience, and enjoy the benefits of StreamVibe.",
    },
    {
      index: "02",
      toggle: true,
      topic: "How do I get started?",
      answer:
        "To get started with StreamVibe, simply create an account by providing a username, email address, and password. Once you've created your account, you'll be able to access your device's settings, control your streaming experience, and enjoy the benefits of StreamVibe.",
    },
    {
      index: "03",
      toggle: true,
      topic: "How do I get started?",
      answer:
        "To get started with StreamVibe, simply create an account by providing a username, email address, and password. Once you've created your account, you'll be able to access your device's settings, control your streaming experience, and enjoy the benefits of StreamVibe.",
    },
    {
      index: "04",
      toggle: true,
      topic: "How do I get started?",
      answer:
        "To get started with StreamVibe, simply create an account by providing a username, email address, and password. Once you've created your account, you'll be able to access your device's settings, control your streaming experience, and enjoy the benefits of StreamVibe.",
    },
    {
      index: "05",
      toggle: true,
      topic: "How do I get started?",
      answer:
        "To get started with StreamVibe, simply create an account by providing a username, email address, and password. Once you've created your account, you'll be able to access your device's settings, control your streaming experience, and enjoy the benefits of StreamVibe.",
    },
    {
      index: "06",
      toggle: true,
      topic: "How do I get started?",
      answer:
        "To get started with StreamVibe, simply create an account by providing a username, email address, and password. Once you've created your account, you'll be able to access your device's settings, control your streaming experience, and enjoy the benefits of StreamVibe.",
    },
  ]);
  const toggleQuestion = (index) => {
    const newQuestions = questions.map((question, i) =>
      i === index ? { ...question, toggle: !question.toggle } : question
    );
    setQuestions(newQuestions);
  };
  return (
    <div className="QandAContainer">
      <div className="QandAHead">
        <div className="text">
          <h2 className="subtitle">Frequently Asked Questions</h2>
          <p className="smallWords">
            Got questions? We've got answers! Check out our FAQ section to find
            answers to the most common questions about StreamVibe.
          </p>
        </div>
        <button>Ask a Question</button>
      </div>
      <div className="cardContainer">
        {questions.map((question, index) => (
          <div key={question.index} className="questionCard">
            <div
              className="thirdTitle cardTitleRow"
              onClick={() => toggleQuestion(index)}
            >
              <p>{question.index}</p>
              <h3>{question.topic}</h3>
              <div className="symbol">{question.toggle}</div>
              <img
                className="toggle-icon"
                src={question.toggle ? plus : minus}
                alt={question.toggle ? "Expand" : "Collapse"}
              />
             
            </div>
            {!question.toggle && (
                <p className="smallWords">{question.answer}</p>
              )}
            <div className="line"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QandA;
