import React from 'react';

import { AppBar } from "material-ui";
import { FlatButton } from "material-ui";

const Header = React.createClass({
  render() {
    return (
      <AppBar
        title="Play Our Game"
        iconElementRight={<FlatButton label="Login" />}
        />
    );
  },
});

module.exports = Header;
