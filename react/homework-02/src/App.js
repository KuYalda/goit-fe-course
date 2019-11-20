import React from 'react';
import Reader from './components/Reader';
import article from './db/publications.json';
import './App.module.css';

const App = () => (
  <>
    <Reader items={article} />
  </>
);

export default App;
