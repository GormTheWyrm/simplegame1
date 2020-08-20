import React from 'react';
import '../App.css';
import Mapgrid from '../components/Map/Map';
import InputButtons from '../components/Input/InputButtons';
import InputTextBox from '../components/Input/InputTextBox';
class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerLocX: 150,
            playerLocY: 150
            //increment these by 50!


        };
    }

    //need button functions
    //need text box handle event function
    //will need to create changes in terrain... once I figure otu if thats what I even want

    testFunction = () => {
        console.log("test");
    }
    handleClickLeft = () => {
        console.log("click");
        let oldX = this.state.playerLocX;
        let newX = oldX - 50;
        if (newX >= 0) {
            this.setState({ playerLocX: newX })
            console.log(this.state)
        }
        else {
            console.log("cannot move left");
        }
    }
    handleClickLeft = () => {
        console.log("click");
        let oldX = this.state.playerLocX;
        let newX = oldX - 50;
        if (newX >= 0) {
            this.setState({ playerLocX: newX })
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
        if (newX < 600) {
            this.setState({ playerLocX: newX })
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
        if (newY < 600) {
            this.setState({ playerLocY: newY })
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
        if (newY >= 0) {
            this.setState({ playerLocY: newY })
            console.log(this.state)
        }
        else {
            console.log("cannot move Up");
        }
    }


    render() {
        return (
            <div>
                <Mapgrid playerX={this.state.playerLocX}
                    playerY={this.state.playerLocY} />
                {/* insert input button and thne  text box so people on ipad can sort of play it */}
                <div style={{ width: 600 + "px", border: "solid blue" }}>
                    <InputButtons 
                        handleLeftClick={this.handleClickLeft} 
                        handleRightClick={this.handleClickRight}
                        handleUpClick={this.handleClickUp}
                        handleDownClick={this.handleClickDown}
                    
                    />
                    <InputTextBox />

                </div>
                
            </div>
        );
    }

};

export default MainPage;
