import React from 'react';
import '../App.css';
import Mapgrid from '../components/Map/Map';

class MainPage extends React.Component {


    render() {
        return (
            <div> 
            {/* // className="container-xl app"> */}
                {/* test
                <div className="container-xl">
                    <div className="row">
                        <div className="col-12">this should be the game screen</div>

                    </div>
                </div> */}


                <Mapgrid />
            </div>
        );
    }

};

export default MainPage;
