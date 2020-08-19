import React from 'react';
import './map.css';


function MapTile(props) {

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
    
    export default MapTile;