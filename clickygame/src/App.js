import React, { Component } from "react";
import Card from "./components/Card";
import Score from "./components/Score";
import cards from "./fall.json";
import "./index.css"



class App extends Component {
 // Setting this.state.friends to the friends json array
  state = {
    cards,
    score: 0,
    topScore: 0,
    message: "Click on any emoji to start playing 😉"
    };
  
  gameOver = () =>{
    if (this.state.score > this.state.topScore) {
      this.setState({topScore: this.state.score}, function() {
        console.log(this.state.topScore);
      });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    this.setState({score: 0, message: "Nay! You clicked an image more than once 😐! Click on any image to try one more time"});
    return true;
  }
  clickCount = id => {
    this.state.cards.find((o, i) => {
      if (o.id === id) {
        if(cards[i].count === 0){
          cards[i].count = cards[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.cards.sort(() => Math.random() - 0.5)
          return true; 
        } else {  
          this.gameOver();
        }
      }
    });
  }
  render(){
    return (
      <div>
        <Score message={this.state.message} score={this.state.score} topScore={this.state.topScore} />
        <div className="card-container">
          {this.state.cards.map(element => (
          <Card
          clickCount={this.clickCount}
          id={element.id}
          key={element.id}
          image={element.image}
          />
        ))}
        </div>
      </div>
    );
  }
}
export default App;
