import React, { Component } from 'react';
import * as API from './services/api';
import ArticleList from './components/ArticleList';
import SearchBar from './components/SearchBar';

export default class App extends Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    API.fetchArticles('reactDOM')
      .then(res => this.setState({ articles: [...res.data.hits] }))
      .catch(err => console.log('err :', err));
  }

  render() {
    const { articles } = this.state;
    return (
      <>
        <SearchBar />
        <ArticleList items={articles} />
      </>
    );
  }
}
