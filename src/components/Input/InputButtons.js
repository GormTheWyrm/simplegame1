import React from 'react';
import './inputControls.css';


function InputButtons(props) {

  //may need to diplay other objects here...
  //such as player?


  return (
    <div className="inputButtons">
      <div className="btnRow">
        {/* top div */}

        <button className=" btn UpButton" onClick={props.handleUpClick}>Up</button>
      </div>
      <div className="btnRow">
        {/* middle div */}
        <button className="btn leftButton" onClick={props.handleLeftClick}>Left</button>
        <button className="btn actionButton" onClick={props.testFunction}>Test</button>
        <button className="btn rightButton" onClick={props.handleRightClick}>Right</button>

      </div>
      <div className="btnRow">
        {/* bottom div */}

        <button className="btn DownButton" onClick={props.handleDownClick}>Down</button>
      </div>


      <div className="btnRow">
        {/* bottom div 2 */}
        <button className="btn">Test</button>
        <button className="btn" >Test</button>
      </div>

    </div>
  );
}

export default InputButtons;