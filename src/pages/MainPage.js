import React from 'react';
import '../App.css';
import Mapgrid from '../components/Map/Map';
import InputButtons from '../components/Input/InputButtons';
import InputTextBox from '../components/Input/InputTextBox';
class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerLocX: 350,
            playerLocY: 250
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


    render() {
        return (
            <div>
                <Mapgrid playerX={this.state.playerLocX}
                    playerY={this.state.playerLocY} />
                {/* insert input button and thne  text box so people on ipad can sort of play it */}
                <div style={{ width: 600 + "px", border: "solid blue" }}>
                    <InputButtons handleLeftClick={this.handleClickLeft} 
                    
                    />
                    <InputTextBox />

                </div>
                <button onClick={this.testFunction}>testFunction</button>
            </div>
        );
    }

};

export default MainPage;
