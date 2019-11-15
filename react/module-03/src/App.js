import React from 'react';
import UsersList from './components/UsersList/UsersList';

const users = [
  {
    id: 1,
    name: 'User-1',
    email: 'mail1@mail.com',
    age: 30,
  },
  {
    id: 2,
    name: 'User-2',
    email: 'mail2@mail.com',
    age: 25,
  },
  {
    id: 3,
    name: 'User-3',
    email: 'mail3@mail.com',
    age: 43,
  },
  {
    id: 4,
    name: 'User-4',
    email: 'mail4@mail.com',
    age: 25,
  },
  {
    id: 5,
    name: 'User-5',
    email: 'mail5@mail.com',
    age: 25,
  },
  {
    id: 6,
    name: 'User-6',
    email: 'mail6@mail.com',
    age: 25,
  },
];

const App = () => (
  <>
    <UsersList users={users} />
  </>
);

export default App;
