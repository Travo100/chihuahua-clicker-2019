import React, { Component } from 'react';
import cards from "./cards.json";
import Scoreboard from "./components/Scoreboard";
import Card from "./components/Card";

class App extends Component {

  state = {
    randomId: 1,
    score: 0,
    tally: 0,
    chihuahuas: cards
  };

  componentDidMount() {
    this.setNewRandomId(this.state.chihuahuas);
  }
  
  handleClicked = id => {
    this.setState({
      tally: this.state.tally + 1
    });
    if(this.state.randomId === id) {
      this.setState({
        score: this.state.score + 1
      });
      this.setNewRandomId(this.state.chihuahuas);
    }
  }

  setNewRandomId = (array) => {
    const randomId = array[Math.floor(Math.random()*array.length)].id;
    this.setState({
      randomId: randomId
    });
  }
  

  render() {
    return (
      <div className="container">
        <Scoreboard 
          title="Chihuahua Clicker 2019"
          score={this.state.score} 
          tally={this.state.tally} 
          randomId={this.state.randomId} 
        />
        <div className="row">
          {this.state.chihuahuas.map(chihuahua => (
            <Card 
              key={chihuahua.id}
              id={chihuahua.id}
              name={chihuahua.name}
              image={chihuahua.image}
              handleClicked={this.handleClicked}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
