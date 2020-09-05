import React from 'react';
import './map.css';


function Player(props) {

    return (
        <div className="player" 
        style={{left: props.xCoord + 14 + "px", 
        bottom: props.yCoord + 14 + "px",
        // this will need to be changed when final img is set
        backgroundColor: props.bgColor
        }}>
            
        </div>
      );
    }
    
    export default Player;