import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as API from '../../services/api';

const ShowsPage = () => {
  const [films, setFilms] = useState([]);

  const fetchFilms = () => {
    API.searchShows().then(({ data }) => setFilms([...data]));
  };

  useEffect(() => {
    fetchFilms();
  });

  return (
    <>
      <ul>
        {films.map(film => (
          <li key={film.show.id}>
            <Link to={`/show/${film.show.id}`}>{film.show.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ShowsPage;
