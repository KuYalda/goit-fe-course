import React, { useState } from 'react';

function SearchBar() {
  const [query, setQuery] = useState('');

  const handleChange = ({ target }) => setQuery(target.value);

  // const handleSubmit = e => {
  //   e.preventDefault();

  //   setQuery('');
  // };
  return (
    <form>
      <input value={query} onChange={handleChange} type="text" />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
