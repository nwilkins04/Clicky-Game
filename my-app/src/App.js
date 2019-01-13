import React, { Component } from "react";
import puppy from "./puppy.json";
import PuppyCard from "./components/PuppyCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";

class App extends Component {
  state ={
    puppy,
    clicked: false
  };

  render() {
    return (
      <Wrapper>
        <Title>Puppy Clicker</Title>
        {this.state.puppy.map(puppy => (
          <PuppyCard>
            id={puppy.id}
            key={puppy.id}
            name={puppy.name}
            image={puppy.image}
          </PuppyCard>
        ))}
      </Wrapper>
    );
  }
}

export default App;
