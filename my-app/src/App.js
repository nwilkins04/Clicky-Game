import React, { Component } from "react";
import "./App.css";
import puppy from "./puppy.json";
import PuppyCard from "./components/PuppyCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";

class App extends Component {
  state ={
    puppy
  };

  render() {
    return (
      <Wrapper>
        <Title>Puppy CLicker</Title>
        {this.state.puppy.map(puppy => (
          <PuppyCard>
            id={puppy.id}
            key={puppy.id}
            image={puppy.image}
          </PuppyCard>
        ))}
      </Wrapper>
    );
  }
}

export default App;
