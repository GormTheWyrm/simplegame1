import React from 'react';
import './map.css';


function MapTile(props) {

    return (
        <div className="player" 
        style={{left: props.xCoord + "px", 
        bottom: props.yCoord + "px",
        backgroundColor: props.bgColor
        }}>
            
        </div>
      );
    }
    
    export default MapTile;