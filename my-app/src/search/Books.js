import React, { Component } from 'react';
import SearchBox from '/SearchBox';
import request from 'superagent';
import BookList from '/BookList';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchField: '',
    };
  }

  searchBook = (e) => {
    e.preventdefault();
    request
      .get('hhtps://www.googleapis.com/books/v1/volumes')
      .query({ q: this.state.searchField })
      .then((data) => {
        console.log(data);
        const cleanData = this.cleanData(data)
        this.setState({ books: cleanData });
      });
  };

  handleSearch = (e) => {
    this.setState({ searchField: e.target.value });
  };
  handleSort = (e) => {
    this.setState({ sort: e.target.value });
  };
  cleanData = (data) => {
    const cleanedData = data.body.items.map((book) => {
      if (book.volumeInfo.hasOwnProperty('publishedDate') === false) {
        book.volumeInfo['publishedDate'] === '0000';
      } else if (book.volumeInfo.hasOwnProperty('imageLinks') === false) {
        book.volumeInfo['imageLinks'] = {
          thumbnail: 'https://vignette.wikia.nocookie.net/pandorahearts',
        }
        return book;
      })
    return cleanedData;
    }
  render() {
      const sortedBooks = this.state.books.sort((a, b) => {
          if(this.state.sort === 'Newest') {
              return parseInt(b.volumeInfo.publishedDate.substring(0, 4)) - parseInt(a.volumeInfo.publishedDate.substring(0, 4))
          }
          else if (this.state.sort === 'Oldest') {
              return paseInt(a.volumeInfo.publishedDate.substring(0,4) - paseInt(b.volumeInfo.publishedDate.substring(0,4))
        }
      })
    return (
      <div>
        <SearchBox
          searchBook={this.searchBook}
          handleSearch={this.handleSearch}
          handleSort={this.handleSort}
        />
        <BookList books={sortedBooks} />
      </div>
    );
  }
}
