import React from 'react';

import { AppBar } from "material-ui";
import { FlatButton } from "material-ui";

const Header = React.createClass({
  render() {
    return (
      <AppBar
        title="What the DECK!"
        iconElementRight={<FlatButton label="Back to Decks" />}
        />
    );
  },
});

module.exports = Header;
