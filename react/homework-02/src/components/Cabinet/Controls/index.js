import React from 'react';

const Controls = ({ operation }) => (
  <>
    <input type="number" min="0.01" name="amount" placeholder="0" />
    <button onClick={operation} type="button" style={{ cursor: 'pointer' }}>
      Deposit
    </button>
    <button onClick={operation} type="button" style={{ cursor: 'pointer' }}>
      Withdraw
    </button>
  </>
);

export default Controls;
