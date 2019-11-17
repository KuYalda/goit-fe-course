import React from 'react';
import PropTypes from 'prop-types';
import s from './Title.module.css';

const H1 = ({ text }) => <h1 className={s.mainheader}>{text}</h1>;
const H2 = ({ text }) => <h2 className={s.header}>{text}</h2>;
const H3 = ({ text }) => <h3>{text}</h3>;

H1.propTypes = {
  text: PropTypes.string,
};

H1.defaultProps = {
  text: undefined,
};

H2.propTypes = {
  text: PropTypes.string,
};

H2.defaultProps = {
  text: undefined,
};

H3.propTypes = {
  text: PropTypes.string,
};

H3.defaultProps = {
  text: undefined,
};

export { H1, H2, H3 };
