import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import IndividualAnswer from './IndividualAnswer.jsx';
import { sampleQuestionsList } from './sampleData.js';
import AddAnswerForm from './AddAnswerForm.jsx';

const IndividualQuestionRow = styled.div`

`;

export default function IndividualQuestion(props) {
  // const questions = ;
  console.log('this is props in individual question:', props);
  const question = props.question.question_body;
  const helpfulness = props.question.question_helpfulness;
  // const [yesClicked, toggleClicked] = useState(false);

  // console.log('sample questions:', sampleQuestionsList.results[0]);
  // console.log('answer text area:', answerText);
  // console.log('helpfulness:', helpfulness);
  // console.log('clicked:', yesClicked);

  // const handleYesClick = () => {
  //   if (!yesClicked) {
  //     toggleClicked(true);
  //     setHelpfulness(helpfulness + 1);
  //   } else {
  //     toggleClicked(false);
  //     setHelpfulness(helpfulness - 1);
  //   }
  // };

  return (
    <IndividualQuestionRow>
      <span>
        <strong>
          Q:
          {question}
        </strong>
      </span>
      <span>
        Helpful?
        <span
          role="button"
          onClick={() => console.log('hw')}
        >
          Yes
        </span> ({helpfulness}) | <AddAnswerForm /></span>
      <IndividualAnswer />
    </IndividualQuestionRow>
  );
};