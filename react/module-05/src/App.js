import React, { Component } from 'react';
import SignUp from './components/SignUp';

class App extends Component {
  state = {
    data: {},
  };

  onHandleSubmit = submData => {
    this.setState({ data: { ...submData } });
  };

  render() {
    const { data } = this.state;
    return (
      <>
        {!data.email && <SignUp onHandleSubmit={this.onHandleSubmit} />}
        {data.name && <div>Hello {data.neame}</div>}
      </>
    );
  }
}

export default App;
