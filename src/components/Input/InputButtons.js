import React from 'react';
import './inputControls.css';


function InputButtons(props) {
  
//may need to diplay other objects here...
//such as player?


  return (
    <div className="inputButtons">
        <button onClick={props.handleLeftClick}>Left</button>
        <button>Right</button>
        <button>Up</button>
        <button>Down</button>
        <button>Test</button>
        <button>Test</button>
        <button onClick={props.testFunction}>Test</button>
    </div>
  );
}

export default InputButtons;