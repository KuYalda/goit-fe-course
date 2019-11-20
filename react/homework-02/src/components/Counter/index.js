import React from 'react';
import s from './Counter.module.css';

const Counter = ({ actualValue, maxValue }) => (
  <p className={s.counter}>
    {actualValue}/{maxValue}
  </p>
);

export default Counter;
