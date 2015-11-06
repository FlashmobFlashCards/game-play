import React from 'react';
import ReactDom from 'react-dom';
import CountdownTimer from '../components/clock';
import Card from '../components/card';
import Header from '../components/header';
// import Card from '../components/card';

export default React.createClass({

  // Start game

  onStartClick() {
    this.props.onStartClick();
  },

  // Back to Deck Callery

  onBackClick() {
    this.props.onBackClick();
  },

  questionAnswered(answer) {
    if (answer.correct === true) {
      console.log('answer is correct!');
    } else {
      console.log('answer is wrong!');
    }
  },

  render() {
    return (
      <div className='wholePage'>
      <Header></Header>
        <CountdownTimer/>
        <Card className="card-image"></Card>
        <button onClick={this.onStartClick} className='startBtn'>Start</button>
        <button onClick={this.onBackClick} className='backBtn'>Back to Deck Gallery</button>
      </div>
    );
  }

});
