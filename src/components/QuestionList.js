import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onDeleteClick, onAnswerChange }) {
  const questionItems = questions.map((q) => (
    <QuestionItem
      key={q.id}
      question={q}
      onDeleteClick={(id) => {
        fetch(`http://localhost:4000/questions/${id}`, {
          method: "DELETE",
        }).then(() => onDeleteClick(id));
      }}
      onAnswerChange={(id, correctIndex) => {
        fetch(`http://localhost:4000/questions/${id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ correctIndex }),
        })
          .then((r) => r.json())
          .then(onAnswerChange);
      }}
    />
  ));

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionItems}</ul>
    </section>
  );
}

export default QuestionList;

