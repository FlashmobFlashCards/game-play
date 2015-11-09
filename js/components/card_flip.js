import React from 'react';
import FlipCard from 'react-flipcard';
import CountdownTimer from './clock';
import Button from './button';
import $ from 'jQuery';

var App = React.createClass({
  getInitialState() {
    return {
      isFlipped: false,
      userAnswer: '',
    };
  },

  showBack() {
    this.setState({
      isFlipped: true
    });
  },

  showFront() {
    this.setState({
      isFlipped: false
    });

    let userAnswer = this.state.userAnswer

    if (userAnswer == this.props.card.answer) {
      alert('Correct!');
    } else {
      alert('Wrong! Correct answer is: ' + this.props.card.answer + ' and your answer was: ' + this.state.userAnswer);
    }
  },

  handleKeyDown(e) {
    if (this.state.isFlipped && e.keyCode === 27) {
      this.showFront();
    }
  },

  handleChange: function(event) {
    this.setState({userAnswer: event.target.value});
  },

  render() {
    return (
    <div className="container-flip">
      <FlipCard
          disabled={true}
          flipped={this.state.isFlipped}
          onFlip={this.handleOnFlip}
          onKeyDown={this.handleKeyDown}
      >
      <div className="front">
            <div>Ready to Get Started?</div>
            <button type="button" onClick={this.showBack}>Start Game</button>
      </div>
      <div>
            <CountdownTimer />
            <div className="back">
              <p>{this.props.card.question}</p>
            </div>
            Answer
            <br></br>
            <input className="answer" onChange={this.handleChange}></input>
            <button type="button" ref="backButton" onClick={this.showFront}>Final Answer</button>
      </div>
      </FlipCard>
    </div>
    );
  }
});

export default App;
