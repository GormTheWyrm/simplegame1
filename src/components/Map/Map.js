import React from 'react';
import './map.css';
import MapTile from './MapTile';
import Player from './Player';

function Mapgrid(props) {
  //right now this is 600px. need to figure otu a way to make it more...flexible.
  //...and responsive to smaller screens. Could be used as a decent minimap then.

  //need to figure out if mapgrid should
  //needs a state to tell tiles where they are to be positioned...
  //and color... and other details...
  //terrain tiles are 10px, including 4px borders... so 50px apart?
  //-nope, bottom left is where box starts so consider the map size to be 500x500 for positioning

  // terrain tiles are currently 100px apart, will need to set up an array to deal with that

  //lets turn this into a class



  let tileArray = []; //now contains 2 objects...
  let gridsize = 12;    //gridsize feels like it should have a small s, I keepign doing a small s, so it stays as a small s.
  let radius = 600; //map size in pixels
  let numTiles = gridsize * gridsize;
  for (let tileNumber = 0; tileNumber < numTiles; tileNumber++) {
    for (let j = 0; j < gridsize; j++) {
      for (let i = 0; i < gridsize; i++) {
        let tempTile = {};
        tempTile.x = (radius / gridsize * i); //this line of code is fucked... kinda
        // console.log("tempTile " + tempTile.x);
        tempTile.y = (radius / gridsize * j);
        tileArray.push(tempTile);
        // console.log(tileArray);
        // console.log(tempTile);
        tileNumber++;
        // console.log(tileNumber);
      }
      //where the fuck is the number 550 coming from!?
    }
  }
  //move this function to constructor- it only needs to be set once...
  //unless gridsize is changeable...



  /*
    .map(function(num, index) {
      if (index < 3) {
         return num
      }
      */

  // may need to figure out another way to render this...
  // NEED TO MAKE MAP FUNCTION TAKE INTO ACCOUNT SOME PROPS..
  return (
    <div id="mapgrid">
      {/* {props.mapArray.map((tile, index) => <MapTile bgColor={"grey"}
        xCoord={tile.x} yCoord={tile.y}
        key={index} mynum={index}
        handleChangeTile={props.handleChangeTile}
      />)} */}



      {props.mapArray.map((tile, index) => <MapTile bgColor={props.mapArray[index].color}
        xCoord={props.mapArray[index].x} yCoord={props.mapArray[index].y}
        key={index}
        handleChangeTile={props.handleChangeTile}
      />)}

      
      {/* <MapTile bgColor={"lightgrey"} xCoord={0} yCoord={550} /> */}

      <Player xCoord={props.playerX} yCoord={props.playerY} />
      
    </div>
  );
}

export default Mapgrid;