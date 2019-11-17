import React from 'react';
import { H1, H2 } from './components/Titles';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendList from './components/FriendList';
import TransactionHistory from './components/TransactionHistory';
import user from './db/user.json';
import statsData from './db/statistical-data.json';
import friends from './db/friends.json';
import transactions from './db/transactions.json';

const App = () => (
  <>
    <H1 text="HOMEWORK#1" />
    <H2 text="Task # 1" />
    <Profile user={user} />
    <H2 text="Task #2" />
    <Statistics title="File upload" stats={statsData} />
    <H2 text="Task #3" />
    <FriendList friends={friends} />
    <H2 text="Task #4" />
    <TransactionHistory items={transactions} />
  </>
);

export default App;
