import React, { Component } from "react";
import SearchArea from "./SearchArea";
import BookList from "./BookList";
import axios from "axios";
import "./Books.css";

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchField: "",
      sort: ""
    };
  }

  handleSearch = (e) => {
    this.setState({ searchField: e.target.value });
  };

  handleSort = (e) => {
    console.log(e.target.value);
    this.setState({ sort: e.target.value });
  };

  cleanData = (data) => {
    const cleanedData = data.data.items.map((book) => {
      console.log(book);
      if (book.volumeInfo.hasOwnProperty("publishedDate") === false) {
        book.volumeInfo["publishedDate"] = "0000";
      } else if (book.volumeInfo.hasOwnProperty("imageLinks") === false) {
        book.volumeInfo["imageLinks"] = {
          thumbnail:
            "https://www.google.com/search?q=image+no+available&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiArZuk9ZfrAhUBuaQKHSUxCkIQ_AUoAXoECAwQAw&biw=2560&bih=1258#imgrc=c9HhSMkB_LemLM&imgdii=bjitzqYIP9hbJM"
        };
      }
      return book;
    });
    return cleanedData;
  };
  searchBook = (e) => {
    e.preventDefault();
    const lien = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchField}`;
    axios
      .get(lien)
      .then((res) => {
        const cleanData = this.cleanData(res);
        this.setState({ books: cleanData });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const sortedBooks = this.state.books.sort((a, b) => {
      if (this.state.sort === "Newest") {
        return (
          parseInt(b.volumeInfo.publishedDate.substring(0, 4), 0) -
          parseInt(a.volumeInfo.publishedDate.substring(0, 4), 0)
        );
      } else if (this.state.sort === "Oldest") {
        return (
          parseInt(a.volumeInfo.publishedDate.substring(0, 4), 0) -
          parseInt(b.volumeInfo.publishedDate.substring(0, 4), 0)
        );
      }
      return sortedBooks;
    });
    return (
      <div>
        <SearchArea
          searchBook={this.searchBook}
          handleSearch={this.handleSearch}
          handleSort={this.handleSort}
        />
        <BookList books={sortedBooks} />
      </div>
    );
  }
}

export default Books;
