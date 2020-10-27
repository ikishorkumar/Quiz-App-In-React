import React from 'react';
import Answer from './Answer'
function AnswersList(props) {
  const options = [];
  for(let i=0 ; i < props.dataSet.options.length ; i++){
    options.push(<Answer choice={i} handleChange={props.handleChange} answer = {props.dataSet.options[i]} />)

  }

  return (
    <div >
    {options}
    </div>
  );
}

export default AnswersList;
