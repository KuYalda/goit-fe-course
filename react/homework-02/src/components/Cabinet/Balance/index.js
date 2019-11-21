import React from 'react';

const Balance = ({ balance }) => (
  // const {balance} = this.PaymentResponse;
  <>
    <span>⬆️2000$</span>
    <span>⬇️1000$</span>
    <span>Balance: {balance}$</span>
  </>
);

export default Balance;
