import React, { Component } from "react";
import Banner from "./components/Banner";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import pics from "./pics.json";

class App extends Component {

  // Setting this.state.pics to the pics json array
  state = {
    pics,
    score: 0,
    highScore: 0,
    clickedArray: [],
    currentStatus:"Click on a plant to begin",
  };

  handleIncrement = (id) => {
    const clickedArrayCopy = [...this.state.clickedArray];
    clickedArrayCopy.push(id);
    this.setState({clickedArray: clickedArrayCopy});

    if(this.state.clickedArray.includes(id)){
      this.setState({score:0, clickedArray:[], currentStatus:"You watered a plant twice! Click on an image to start again."})
    }else{
      this.setState({ score: this.state.score + 1, currentStatus:"Watering!" });
    };

    if(this.state.score>this.state.highScore){
      this.setState({highScore: this.state.score})
    }

    const picsCopy = [...this.state.pics];
    picsCopy.sort(() => Math.random() - 0.5);
    this.setState({pics:picsCopy});
  };

  render() {
    return (
    <div>
      
      <Banner 
      score={this.state.score}
      highScore={this.state.highScore}
      currentStatus={this.state.currentStatus}/>
      <Jumbotron />
      <Wrapper>
      {this.state.pics.map(pic => (
          <Card
            id={pic.id}
            key={pic.id}
            name={pic.name}
            image={pic.image}
            onClick={this.handleIncrement}
          />
        ))}
      </Wrapper>
    </div>
  );
};
}

export default App;
