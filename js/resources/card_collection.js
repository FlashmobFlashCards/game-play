import React from 'react';

let Card = React.createClass({
  render: function() {
    return
      <div className={"card-container " + this.props.orientation}>
        <div className={"card" + (this.props.flipped ? " flipped" : "")}>
          <Front>the front!</Front>
          <Back>the back!</Back>
        </div>
      </div>;
    }
});

export default React;
