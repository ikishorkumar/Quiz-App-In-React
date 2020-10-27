import React from 'react';
import Correct from './Correct'
import Incorrect from './Incorrect'

function ScoresArea(props) {
  return (
    <div >
    <h2> Your Scores : </h2>
    <Correct correct={props.correct} />
    <Incorrect incorrect={props.incorrect} />
    </div>
  );
}

export default ScoresArea;