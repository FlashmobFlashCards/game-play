import React from 'react';
import ReactDom from 'react-dom';

export default React.createClass({


  onSubmitClick() {
    this.props.onLoginClick();
  },

  // test

  render() {
    console.log(this);
    return (
      <div className='wholePage'>
         <header className='logo'></header>
            <div className='loginBox'>
              <form className='form'>
                <label>Username<input type='text' placeholder='Username' className='logInput user' /></label>
                <label> Password<input type='text' placeholder='Must be 6 alphanumeric characters' className='logInput password' /></label>
                <button onClick={this.onSubmitClick} className='logInput loginBtn'>Log In</button>
                <checkbox label='Remember Me' checked='false' className='logInput checkbox' />
              </form>
            </div>
      </div>
    );
  }

});
