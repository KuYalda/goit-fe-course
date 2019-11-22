import React from 'react';

const Balance = ({ balance, deposit, withdraw }) => (
  <>
    // eslint-disable-next-line
    <span>⬆️{deposit}$</span>
    // eslint-disable-next-line
    <span>⬇️{withdraw}$</span>
    <span>Balance: {balance}$</span>
  </>
);

export default Balance;
