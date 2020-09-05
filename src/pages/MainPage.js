import React from 'react';
import '../App.css';
import Mapgrid from '../components/Map/Map';
import InputButtons from '../components/Input/InputButtons';
import InputTextBox from '../components/Input/InputTextBox';



class MainPage extends React.Component {
    constructor(props) {
        super(props);
        let tileArray = []; //init
        let gridsize = 12;    // tiless per row
        let radius = 600; //map size in pixels
        let numTiles = gridsize * gridsize;
        for (let tileNumber = 0; tileNumber < numTiles; tileNumber++) {
            for (let j = 0; j < gridsize; j++) {
                for (let i = 0; i < gridsize; i++) {
                    let tempTile = {};
                    tempTile.x = (radius / gridsize * i); //this line of code is fucked... kinda
                    // console.log("tempTile " + tempTile.x);
                    tempTile.y = (radius / gridsize * j);
                    tempTile.color = "grey";
                    tileArray.push(tempTile);
                    // console.log(tileArray);
                    // console.log(tempTile);
                    tileNumber++;
                }
            }
            console.log(tileArray);
        }
        
        this.state = {
            playerLocX: 150,
            playerLocY: 150,
            playerLocIndex: 39, 
            // greenTiles: [],
            mapArray: tileArray

        };
        // this.setState({...this.state, mapArray: tileArray})
        console.log("tile array in state:");
        console.log(this.state.mapArray);


    }

    //need button functions
    //need text box handle event function
    //will need to create changes in terrain... once I figure out if thats what I even want

    testFunction = () => {
        console.log("test");
    }

    handleClickLeft = () => {
        console.log("click");
        let oldX = this.state.playerLocX;
        let newX = oldX - 50;
        let myIndex = this.state.playerLocIndex;
        let newIndex = myIndex - 1;
        if (newX >= 0) {
            this.setState({ playerLocX: newX, playerLocIndex: newIndex })
            console.log(this.state)
        }
        else {
            console.log("cannot move left");
        }
    }
    handleClickRight = () => {
        console.log("click");
        let oldX = this.state.playerLocX;
        let newX = oldX + 50;
        let myIndex = this.state.playerLocIndex;
        let newIndex = myIndex + 1;
        if (newX < 600) {
            this.setState({ playerLocX: newX, playerLocIndex: newIndex })
            console.log(this.state)
        }
        else {
            console.log("cannot move right");
        }
    }
    handleClickUp = () => {
        console.log("click");
        let oldY = this.state.playerLocY;
        let newY = oldY + 50;
        let myIndex = this.state.playerLocIndex;
        let newIndex = myIndex + 12;
        if (newY < 600) {
            this.setState({ playerLocY: newY, playerLocIndex: newIndex })
            console.log(this.state)
        }
        else {
            console.log("cannot move Up");
        }
    }
    handleClickDown = () => {
        console.log("click");
        let oldY = this.state.playerLocY;
        let newY = oldY - 50;
        let myIndex = this.state.playerLocIndex;
        let newIndex = myIndex - 12;
        if (newY >= 0) {
            this.setState({ playerLocY: newY, playerLocIndex: newIndex })
            console.log(this.state); //this is old state...
        }
        else {
            console.log("cannot move Up");
        }
    }
    handleClickAction = () => {
        console.log("action");
        console.log(this.state.playerLocIndex);
        // I want to turn a specific tile a specific color...
        // do I need to pass a function to handle this into MapTile?

        // should turn MapTile of index green?

    }
    handleTileChange = () => {
        console.log("test");
    }


    render() {
        return (
            <div>
                <Mapgrid playerX={this.state.playerLocX}
                    playerY={this.state.playerLocY}
                    handleChangeTile={this.handleTileChange}
                    mapArray={this.state.mapArray}
                />
                {/* insert input button and thne  text box so people on ipad can sort of play it */}
                <div style={{ width: 600 + "px", border: "solid blue" }}>
                    <InputButtons
                        handleLeftClick={this.handleClickLeft}
                        handleRightClick={this.handleClickRight}
                        handleUpClick={this.handleClickUp}
                        handleDownClick={this.handleClickDown}
                        handleActionClick={this.handleClickAction}
                    />
                    <InputTextBox />

                </div>

            </div>
        );
    }

};

export default MainPage;
