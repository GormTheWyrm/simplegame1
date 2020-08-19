import React from 'react';
import './map.css';
import MapTile from './MapTile';
import Player from './Player';

function Mapgrid() {

//need to figure out if mapgrid should
//needs a state to tell tiles where they are to be positioned...
//and color... and other details...
//terrain tiles are 10px, including 4px borders... so 50px apart?
//-nope, bottom left is where box starts so consider the map size to be 500x500 for positioning

// terrain tiles are currently 100px apart, will need to set up an array to deal with that

//lets turn this into a class
  return (
    <div id="mapgrid">
        
        <MapTile bgColor={"lightgrey"} xCoord={0} yCoord={550}/>
        <MapTile bgColor={"lightgrey"}xCoord={100} yCoord={550}/>
        <MapTile bgColor={"lightgrey"}xCoord={200} yCoord={550}/>
        <MapTile bgColor={"lightgrey"}xCoord={300} yCoord={550}/>
        <MapTile bgColor={"lightgrey"}xCoord={400} yCoord={550}/>
        <MapTile bgColor={"lightgrey"}xCoord={500} yCoord={550}/>

        <MapTile bgColor={"darkgrey"} xCoord={50} yCoord={550}/>
        <MapTile bgColor={"darkgrey"}xCoord={150} yCoord={550}/>
        <MapTile bgColor={"darkgrey"}xCoord={250} yCoord={550}/>
        <MapTile bgColor={"darkgrey"}xCoord={350} yCoord={550}/>
        <MapTile bgColor={"darkgrey"}xCoord={450} yCoord={550}/>
        <MapTile bgColor={"darkgrey"}xCoord={550} yCoord={550}/>


        <MapTile 
        xCoord={0}
        yCoord={0}
        bgColor={"green"}
        />

        <Player xCoord={300} yCoord={500}/>
    </div>
  );
}

export default Mapgrid;