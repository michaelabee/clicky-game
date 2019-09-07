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
    clickedArray: []
  };


//need to check on each click if the image is in the clickedArray

  handleIncrement = (id) => {
    const clickedArrayCopy = [...this.state.clickedArray];
    clickedArrayCopy.push(id);
    this.setState({clickedArray: clickedArrayCopy})
    // We always use the setState method to update a component's state
    this.setState({ score: this.state.score + 1 });
    const picsCopy = [...this.state.pics];
    picsCopy.sort(() => Math.random() - 0.5);
    this.setState({pics:picsCopy});
  };

  render() {
    return (
    <div>
      
      <Banner score={this.state.score}
      highScore={this.state.highScore}/>
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
