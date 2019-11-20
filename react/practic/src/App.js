import React, { Component } from 'react';
import SignUp from './components/SignUp';

class App extends Component {
  state = {
    data: {},
  };

  onHandleSubmit = userData => {
    this.setState(ps => ({
      data: { ...ps.data, ...userData },
    }));
  };

  render() {
    return (
      <>
        <SignUp onHandleSubmit={this.onHandleSubmit} />
      </>
    );
  }
}

export default App;
