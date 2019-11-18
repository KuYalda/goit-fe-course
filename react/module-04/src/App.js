import React, { Component } from 'react';
import BuyController from './components/BuyController';

class App extends Component {
  state = {
    modalOpen: false,
    cart: 0,
  };

  openModal = () => {
    this.setState(prevState => ({
      modalOpen: !prevState.modalOpen,
    }));
  };

  handleAddToCart = count => {
    this.setState(state => ({ cart: state.cart + count }));
  };

  render() {
    const { modalOpen, cart } = this.state;

    return (
      <>
        {modalOpen && (
          <div style={{ position: 'absolute', left: '100px' }}>modal</div>
        )}
        <button onClick={this.openModal} type="button">
          Open
        </button>
        <BuyController handleAddToCart={this.handleAddToCart} step={5} />
        <BuyController handleAddToCart={this.handleAddToCart} step={3} />
        <BuyController handleAddToCart={this.handleAddToCart} step={1} />
        <span>cart: {cart}</span>
      </>
    );
  }
}

export default App;
