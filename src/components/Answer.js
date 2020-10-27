import React from 'react';

function Answer(props) {
  return (
    <div >
    <button onClick={()=> props.handleChange(props.choice) }>{props.answer}</button>
    </div>
  );
}

export default Answer;
