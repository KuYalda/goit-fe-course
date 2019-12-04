import React, { useState, useEffect } from 'react';
import * as API from '../../services/api';

const ShowDetailsPage = () => {
  const [show, setShow] = useState({});

  const fetchShow = () => {
    const { match } = this.props;
    const { showId } = match.params;
    API.searchExactShow(showId).then(({ data }) => setShow({ ...data }));
  };

  useEffect(() => {
    fetchShow();
  });

  return console.log('show :', show) || <div>ShowDetailsPage</div>;
};

export default ShowDetailsPage;
