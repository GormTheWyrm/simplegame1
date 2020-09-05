import React from 'react';
import './map.css';


function MapTile(props) {
  
//may need to diplay other objects here...
//such as player?


  return (
    <div className="maptile" 
    // ccc={props.handleChangeTile}
    style={{left: props.xCoord + "px", 
    bottom: props.yCoord + "px",
    backgroundColor: props.bgColor
    }}>
        {props.mynum} 
    </div>
  );
}

export default MapTile;