import React from 'react';
import '../App.css';
import Mapgrid from '../components/Map/Map';
import InputButtons from '../components/Input/InputButtons';
import InputTextBox from '../components/Input/InputTextBox';
class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerLocX: 0,
            playerLocY: 0


        };
    }

    //need button functions
    //need text box handle event function
    //will need to create changes in terrain... once I figure otu if thats what I even want

    testFunction() {
        console.log("test");
    }
    handleClickLeft(){
        console.log("click");
        this.setState({playerLocX: 50})
    }
    

    render() {
        return (
            <div>
                <Mapgrid playerX={this.state.playerLocX}
                    playerY={this.state.playerLocX} />
                {/* insert input button and thne  text box so people on ipad can sort of play it */}
                <div style={{ width: 600 + "px", border: "solid blue" }}>
                    <InputButtons />
                    <InputTextBox />

                </div>
                <button onClick={this.testFunction}>testFunction</button>
            </div>
        );
    }

};

export default MainPage;
