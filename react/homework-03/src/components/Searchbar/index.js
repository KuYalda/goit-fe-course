import React, { useState } from 'react';
// import PropTypes from 'prop-types';

import s from './Searchbar.module.css';

const SearchBar = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleValueChange = ({ target }) => {
    const { value } = target;

    setSearchValue(value);
  };

  const submitSearchValue = e => {
    e.preventDefault();
    onSubmit(searchValue);
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={submitSearchValue}>
        <button type="submit" className={s.SearchForm_button}>
          <span className={s.SearchForm_button_label}>Search</span>
        </button>

        <input
          className={s.SearchForm_input}
          type="text"
          value={searchValue}
          name="seachValue"
          // autoComplete="off"
          // autoFocus
          placeholder="Search images and photos"
          onChange={handleValueChange}
        />
      </form>
    </header>
  );
};

// SearchBar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

export default SearchBar;
