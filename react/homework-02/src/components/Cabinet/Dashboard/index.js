import React, { Component } from 'react';
import Controls from '../Controls';
import Balance from '../Balance';
import TransactionHistory from '../TransactionHistory';
const shortid = require('shortid');

export default class Dashboard extends Component {
  state = {
    transactions: [],
    balance: 0,
  };

  operation = e => {
    const value = Number(e.target.parentElement.firstElementChild.value);
    // console.log('value :', typeof value);
    const depType = e.target.textContent;
    const newTransaction = {
      id: shortid.generate(),
      type: depType,
      amount: value,
      date: new Date().toLocaleString(),
    };
    this.setState(ps => {
      if (depType === 'Withdraw' && value > ps.balance) {
        return {};
      } else {
        return {
          transactions: [newTransaction, ...ps.transactions],
          balance: this.changeBalance([newTransaction, ...ps.transactions]),
        };
      }
    });
  };

  changeBalance = transactions => {
    const value = transactions.reduce((acc, el) => {
      el.type === 'Deposit' ? (acc += el.amount) : (acc -= el.amount);
      return acc;
    }, 0);
    return value;
  };

  render() {
    const { balance, transactions } = this.state;
    return (
      <div>
        <section className="">
          <Controls operation={this.operation} />
        </section>
        <section className="">
          <Balance balance={balance} />
        </section>
        {transactions.length > 0 ? (
          <table className="">
            <thead>
              <tr>
                <th>Transaction</th>
                <th>Amount</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <TransactionHistory transactions={transactions} />
            </tbody>
          </table>
        ) : (
          <p>No transactions</p>
        )}
      </div>
    );
  }
}
