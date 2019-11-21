import React, { Component } from 'react';

export default class Controls extends Component {
  state = {};

  render() {
    const { operation } = this.props;
    return (
      <>
        <input type="number" name="amount" />
        <button onClick={operation} type="button">
          Deposit
        </button>
        <button onClick={operation} type="button">
          Withdraw
        </button>
      </>
    );
  }
}
