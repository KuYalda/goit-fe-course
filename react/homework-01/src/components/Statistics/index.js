import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import { H2 } from '../Titles';

const Statistics = ({ title, stats }) => (
  <section className={s.statistics}>
    {title && <H2 text={title} />}
    <ul className={s.statlist}>
      {stats.length > 0 &&
        stats.map(el => (
          <li key={el.id} className={s.item}>
            <span className={s.label}>{el.label}</span>
            <span className={s.percentage}>{el.percentage}%</span>
          </li>
        ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ).isRequired,
};

Statistics.defaultProps = {
  title: undefined,
};

export default Statistics;
