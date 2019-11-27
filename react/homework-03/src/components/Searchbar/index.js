import React from 'react';
// import PropTypes from 'prop-types';
import s from './Searchbar.module.css';

const SearchBar = ({ onSubmit }) => (
  <header className={s.Searchbar}>
    <form className={s.SearchForm} onSubmit={onSubmit}>
      <button type="submit" className={s.SearchForm_button}>
        <span className={s.SearchForm_button_label}>Search</span>
      </button>

      <input
        className={s.SearchForm_input}
        type="text"
        // autoComplete="off"
        // autoFocus
        placeholder="Search images and photos"
      />
    </form>
  </header>
);

// SearchBar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

export default SearchBar;
