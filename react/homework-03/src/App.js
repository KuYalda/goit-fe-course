import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import * as API from './services/api';
import SearchBar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Modal from './components/Modal';

const INITIAL_VALUE = {
  images: [],
  searchQuery: '',
  page: 1,
  isLoading: false,
  modalProps: null,
};

const loaderStyles = {
  textAlign: 'centre',
};

export default class App extends Component {
  state = { ...INITIAL_VALUE };

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;

    if (prevState.page < page) {
      window.scrollTo({
        top: document.getElementById('root').scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  getValue = searchValue => {
    const { searchQuery, page } = this.state;

    if (!searchValue) {
      this.setState({ ...INITIAL_VALUE });
      return;
    }
    if (searchQuery !== searchValue && searchQuery) {
      this.setState({
        ...INITIAL_VALUE,
        searchQuery: searchValue,
        page: 2,
      });
      this.getImages(searchValue, 1);
      return;
    }
    this.setState(prevState => ({
      ...prevState,
      page: prevState.page + 1,
      searchQuery: searchValue,
    }));

    this.getImages(searchValue, page);
  };

  handleChangePage = () => {
    const { searchQuery, page } = this.state;
    this.setState(prevState => ({ page: prevState.page + 1 }));
    this.getImages(searchQuery, page);
  };

  onImgClick = (src, alt) => {
    this.setState({ modalProps: { src, alt } });
  };

  onModalClick = (target, element) => {
    if (target === element.current) {
      this.setState({ modalProps: null });
    }
  };

  onModalKeyDown = ({ keyCode }) => {
    if (keyCode === 27) {
      this.setState({ modalProps: null });
    }
    window.scrollTo({
      top: document.getElementById('root').scrollHeight,
      behavior: 'smooth',
    });
  };

  getImages = (searchValue, pageNumber) => {
    this.setState({ isLoading: true });
    if (searchValue && pageNumber) {
      API.fetchImages(searchValue, pageNumber)
        .then(({ data }) => {
          this.setState(prevState => ({
            images: [...prevState.images, ...data.hits],
          }));
        })
        .catch(err => console.log('err :', err))
        .finally(() => this.setState({ isLoading: false }));
    }
  };

  render() {
    const { images, isLoading, modalProps } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.getValue} />
        {images.length > 0 && (
          <>
            <ImageGallery items={images} onClick={this.onImgClick} />
            <Button onClick={this.handleChangePage} />
            {modalProps && (
              <Modal
                src={modalProps.src}
                alt={modalProps.alt}
                onClick={this.onModalClick}
                onKeyDown={this.onModalKeyDown}
              />
            )}
          </>
        )}
        {isLoading && (
          <Loader
            type="Grid"
            color="#3f51b5"
            height={500}
            width={500}
            style={loaderStyles}
          />
        )}
      </>
    );
  }
}
