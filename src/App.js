import React from "react";

// CSS
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css";

// JS
import Box from "./components/Box.js";

const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

class App extends React.Component {
  constructor(){
    super();

    this.state={
      water: 0,
      heart: 120,
      temperature: -10,
      steps: 3000,
    }

    this.onHeartChange = this.onHeartChange.bind(this);
    this.onTempChange = this.onTempChange.bind(this);
    this.onStepsChange = this.onStepsChange.bind(this);
  }

  onHeartChange(e){
    this.setState({
      heart: e.target.value,
    });
  }

  onTempChange(e){
    this.setState({
      temperature: e.target.value,
    });
  }

  onStepsChange(e){
    this.setState({
      steps: e.target.value,
    });
  }

  // calculateWater(){
  //   this.setState({

  //     if (temperature >= 20) {
  //       water = {() => {this.setState((prevState) =>{
  //         return {
  //                  water: 1.5 + (prevState.temperature +1) * 0.02,
  //                 };
  //           });
  //       }} 
  //     }
  //   });
  // }


  render() {
    return (
      <div className="container-fluid">
        <div className="row">
        
          {/* Water */}
          <Box
            icon="local_drink"
            color="#3A85FF"
            value={this.state.water}
            min= "1.5"
            unit="L" 
            onChange={this.calculateWater}
          />
 
          {/* Heart */}
          <Box
            icon="favorite"
            color="red"
            value={this.state.heart}
            unit="bpm"
            min={heartMin}
            max={heartMax}
            onChange={this.onHeartChange}
          />

          {/* Temperature  */}
          <Box
            icon="wb_sunny"
            color="yellow"
            value={this.state.temperature}
            unit="°C"
            min={tempMin}
            max={tempMax}
            onChange={this.onTempChange}
          />

          {/* Steps */}
          <Box
            icon="directions_walk"
            color="black"
            value = {this.state.steps}
            unit="steps"
            min ={stepsMin}
            max ={stepsMax}
            onChange={this.onStepsChange}
          />
               
        </div>
      </div>
    );
  }
}

export default App;



