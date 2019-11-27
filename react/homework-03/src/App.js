import React, { Component } from 'react';
import SearchBar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';

export default class App extends Component {
  state = {
    // images: [],
  };

  render() {
    return (
      <>
        <SearchBar />
        <ImageGallery />
      </>
    );
  }
}
