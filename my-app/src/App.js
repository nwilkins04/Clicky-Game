import React, { Component } from "react";
import _ from 'lodash';

import puppy from "./puppy.json";
import PuppyCard from "./components/PuppyCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";

class App extends Component {
  state ={
    puppy,
    clickedId: null,
    userLost:false,
  };
  didUserLose = selectedId => {
    if(!this.state.clickedId){
      return false;
    }
    if(selectedId === this.state.clickedId){
      //here we have a lose
      return true;
    }
    return false;
  }
  puppyClickHandler = selectedId => {
     const currentPuppyArray = [...this.state.puppy];
     const newArray = _.shuffle(currentPuppyArray);

    // while(currentPuppyArray.length > 0){
    //   const randVal = Math.floor(Math.random() * currentPuppyArray.length);
    //   const randObject = currentPuppyArray.splice(randVal, 1)[0];
    //   newArray.push(randObject);
    // }
    const userLoses = this.didUserLose(selectedId);
    if(userLoses){
      console.log('User lsoes')
      this.setState({userLost:true})
    }
    else {

      this.setState({puppy:newArray, clickedId: selectedId});
    }
    
  }
  render() {
    if(!this.state.userLost){
    return (
      <Wrapper>
        <Title>Puppy Clicker</Title>
        {this.state.puppy.map((pup) => (
          <PuppyCard
          puppyClickHandler={this.puppyClickHandler}
            id={pup.id}
            key={pup.id}
            name={pup.name}
            image={pup.image}
            >
          </PuppyCard>
        ))}
      </Wrapper>
    );
        }
        else {
          return (<div>You lose</div>)
        }
  }
}

export default App;
