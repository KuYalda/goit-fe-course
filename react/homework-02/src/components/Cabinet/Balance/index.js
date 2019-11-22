import React from 'react';

const Balance = ({ balance, deposit, withdraw }) => (
  <>
    <span>⬆️{deposit}$</span>
    <span>⬇️{withdraw}$</span>
    <span>Balance: {balance}$</span>
  </>
);

export default Balance;
