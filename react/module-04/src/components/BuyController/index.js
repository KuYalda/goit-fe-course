import React, { Component } from 'react';

class BuyController extends Component {
  state = {
    count: 0,
    step: this.props.step,
  };

  onIncrement = () => {
    const { step } = this.state;
    this.setState(prevState => ({
      count: prevState.count + step,
    }));
  };

  onDecrement = () => {
    const { step } = this.state;
    this.setState(prevState => {
      if (prevState.count === 0) {
        return {};
      }
      return {
        count: prevState.count - step,
      };
    });
  };

  addToCart = () => {
    const { handleAddToCart } = this.props;
    const { count } = this.state;
    handleAddToCart(count);
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <div>
          <button type="button" onClick={this.onDecrement}>
            -
          </button>
          <span>{count}</span>
          <button type="button" onClick={this.onIncrement}>
            +
          </button>
          <button type="button" onClick={this.addToCart}>
            Add to cart
          </button>
        </div>
      </div>
    );
  }
}

export default BuyController;
