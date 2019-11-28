import React, { useState } from 'react';
import * as API from './services/api';
import SearchBar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';

const App = () => {
  const [page, setPage] = useState(1);
  const [value, setValue] = useState('');
  const [images, setImages] = useState([]);

  const getImages = (searchValue, pageNumber) => {
    if (searchValue && pageNumber) {
      API.fetchImages(searchValue, pageNumber)
        .then(res => setImages(prevImages => [...prevImages, ...res.data.hits]))
        .catch(err => console.log('err :', err));
    } else {
      setImages([]);
    }
  };

  const getValue = searchValue => {
    if (!searchValue) {
      setValue('');
      setPage(1);
      setImages([]);
    } else {
      setValue(prevValue => {
        if (prevValue !== searchValue) {
          console.log('prevValue :', prevValue);
          console.log('searchValue :', searchValue);
          // setPage(prevPage => prevPage - prevPage+);
          setImages([]);
          // console.log('page :', page);

          // return searchValue;
        }
      });
    }
    console.log('page :', page);
    getImages(searchValue, page);
    setPage(prevPage => prevPage + 1);
  };

  const handleChangePage = () => {
    setPage(page + 1);
    getImages(value, page);
  };

  // const renderImages = (searchValue, pageNumber) => {
  //   if (searchValue && pageNumber) {
  //     console.log('hello');
  //     getImages(searchValue, pageNumber);
  //   } else {
  //     return;
  //   }
  // };

  // console.log('images :', images);

  // setImages(() => {
  //   getMyImages(searchValue, page);
  // });

  return (
    <>
      <SearchBar onSubmit={getValue} />
      {images.length > 0 && (
        <>
          <ImageGallery items={images} />
          <Button onClick={handleChangePage} />
        </>
      )}
    </>
  );
};

export default App;
