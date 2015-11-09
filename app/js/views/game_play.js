import React from 'react';
import ReactDom from 'react-dom';
import CountdownTimer from '../components/clock';
// import Card from '../components/card';
import Header from '../components/header';
import Button from '../components/button';
import App from '../components/card_flip';

export default React.createClass({

  // Start game

  onStartClick() {
    this.props.onStartClick();
  },

  chooseEditCard(id) {
    alert('You clicked the card: ' + id);
    // this.props.editCardClick(id);
  },

  // Back to Deck Callery

  onBackClick() {
    this.props.onBackClick();
  },

  goGameBtn() {
    console.log("It works!")
  },

  questionAnswered(answer) {
    if (answer.correct === true) {
      console.log('answer is correct!');
    } else {
      console.log('answer is wrong!');
    }
  },

  processCards(card) {
    return(
      <App
        card={card}
      />
    );
  },

  render() {
    return (
      <div className='wholePage'>
      <Header></Header>
      <h1 className="game-title">You have 60 seconds to guess the 5 questions!</h1>
        <ul className='cardGallery'>{this.props.cards.map(this.processCards)}</ul>
      </div>
    );
  }

});

//         <CountdownTimer/>
//         <Card className="card-image"></Card>
//         <Button onClick={this.onStartClick} className='startBtn'>Start</Button>
//
