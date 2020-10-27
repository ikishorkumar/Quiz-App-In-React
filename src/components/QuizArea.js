import React from 'react';
import Question from './Question'
import AnswersList from './AnswersList'
import Greetings from './Greetings';



function QuizArea(props) {
  if(props.isFinished){
    return <Greetings />
  }
  return (
    <div >
      <Question  dataSet={props.dataSet}/>
      <AnswersList handleChange={props.handleChange} dataSet={props.dataSet} />
    </div>
  );
}

export default QuizArea;
