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
  let numTiles = gridsize * gridsize;
  for (let tileNumber = 0; tileNumber < numTiles; tileNumber++) {
    for (let j = 0; j < gridsize; j++) {
      for (let i = 0; i < gridsize; i++) {
        let tempTile = {};
        tempTile.x = (600 / gridsize * i); //this line of code is fucked... kinda
        console.log("tempTile " + tempTile.x);
        tempTile.y = (600 / gridsize * j);
        tileArray.push(tempTile);
        // console.log(tileArray);
        console.log(tempTile);
        tileNumber++;
        console.log(tileNumber);
      }
        //where the fuck is the number 550 coming from!?
    }
  }
  //move this function to constructor- it only needs to be set once...
  //unless gridsize is changeable...
  //error; there seems to be 2 x and y coordinates... I dont know why.
  //for some reason it is settign an x and y value to 550... within tileArray




  return (
    <div id="mapgrid">
      {tileArray.map(tile => <MapTile bgColor={"grey"}
        xCoord={tile.x} yCoord={tile.y}

      />)}
      {tileArray.length /* 1 too high...*/}
       <p>{tileArray[0].x}</p>
      <p>{tileArray[1].x}</p>
      <p>{tileArray[2].y}</p>
      <p>{tileArray[0].y}</p>
      <p>{tileArray[1].y}</p> 





      {/* 
      <MapTile bgColor={"lightgrey"} xCoord={0} yCoord={550} />
      <MapTile bgColor={"lightgrey"} xCoord={100} yCoord={550} />
      <MapTile bgColor={"lightgrey"} xCoord={200} yCoord={550} />
      <MapTile bgColor={"lightgrey"} xCoord={300} yCoord={550} />
      <MapTile bgColor={"lightgrey"} xCoord={400} yCoord={550} />
      <MapTile bgColor={"lightgrey"} xCoord={500} yCoord={550} />

      <MapTile bgColor={"darkgrey"} xCoord={50} yCoord={550} />
      <MapTile bgColor={"darkgrey"} xCoord={150} yCoord={550} />
      <MapTile bgColor={"darkgrey"} xCoord={250} yCoord={550} />
      <MapTile bgColor={"darkgrey"} xCoord={350} yCoord={550} />
      <MapTile bgColor={"darkgrey"} xCoord={450} yCoord={550} />
      <MapTile bgColor={"darkgrey"} xCoord={550} yCoord={550} />


      <MapTile
        xCoord={0}
        yCoord={0}
        bgColor={"green"}
      />
 */}
      <Player xCoord={props.playerX} yCoord={props.playerY} />
    </div>
  );
}

export default Mapgrid;