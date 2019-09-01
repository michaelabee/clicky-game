import React, { Component } from "react";
import Banner from "./components/Banner";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import pics from "./pics.json";

class App extends Component {
  // Setting this.state.pics to the pics json array
  state = {
    pics
  };

  render() {
    return (
    <div>
      <Wrapper>
      <Banner />
      <Jumbotron />
      {this.state.pics.map(pic => (
          <Card
            id={pic.id}
            key={pic.id}
            name={pic.name}
            image={pic.image}
          />
        ))}
      </Wrapper>
    </div>
  );
};
}

export default App;
