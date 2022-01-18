import React from "react";
import Books from "../../components/Books/";
import Footer from "../../components/Footer"
import { useState, useEffect } from "react";

function Home() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    async function booksApi() {
      const response = await fetch(
        "http://localhost:5000/books"
      );
      const data = await response.json();
      setBook(data);
    }
    booksApi();
  }, []);

  return (
    <div className="home-container">
      <div className="container">
        {book.map((book, index) => (
          <Books key={index} data={book}></Books>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
