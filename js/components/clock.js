import React from 'react';

var CountdownTimer = React.createClass({
  getInitialState: function() {
    return {
      secondsRemaining: 60
    };
  },

  tick: function() {
    this.setState({secondsRemaining: this.state.secondsRemaining - 1});
    if (this.state.secondsRemaining <= 0) {
      clearInterval(this.interval);
    }
  },

  componentDidMount: function() {
    this.setState({ secondsRemaining: this.state.secondsRemaining });
    this.interval = setInterval(this.tick, 1000);
  },

  componentWillUnmount: function() {
    clearInterval(this.interval);
  },

  render: function() {
    return (
      <div>Seconds Remaining: {this.state.secondsRemaining}</div>
    );
  }
});

export default CountdownTimer;
