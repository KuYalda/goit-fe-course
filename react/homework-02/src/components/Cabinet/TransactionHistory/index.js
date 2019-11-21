import React from 'react';

const TransactionHistory = ({ transactions }) =>
  transactions.map(el => (
    <tr key={el.id}>
      <td>{el.type}</td>
      <td>{el.amount}$</td>
      <td>{el.date}</td>
    </tr>
  ));

export default TransactionHistory;
