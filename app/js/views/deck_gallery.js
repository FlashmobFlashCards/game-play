import React from 'react';
import ReactDom from 'react-dom';

export default React.createClass({

  playDeck(deck_id) {
    this.props.onPlayClick(deck_id);
  },

  onAddClick() {
    this.props.onAddClick();
  },

  onEditClick() {
    this.props.onEditClick();
  },

  onLogout() {
    this.props.onLogoutClick();
  },

  processDecks(data) {
    console.log(data);
    return (
      <li className="decks" key={data.deck_id} onClick={() => this.playDeck(data.deck_id)}>
        {data.title}
      </li>
    );
  },

  render() {
    return (
      <div className='userHome'>
        <header>
          <h2>Welcome</h2>
          <div className="userScore"></div>
          <button onClick={this.onLogout}>Log Out</button>
          <button onClick={this.onEditClick} className='editBtn'>Edit a Deck</button>
          <button onClick={this.onAddClick} className='addBtn'>Add a Deck</button>
          <hr/>
        </header>
        <main>
          <div className="galleryWrapper">
            <ul className="gallery">{this.props.decks.map(this.processDecks)}</ul>
          </div>
        </main>
      </div>
    );
  }

});
