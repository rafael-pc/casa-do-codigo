import React, { useState, useEffect } from "react";
import Books from "../../components/Books/";
import Footer from "../../components/Footer";

import { Container } from "./styles";

function Home() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    async function booksApi() {
      try {
        const response = await fetch(`http://localhost:3333/books`);
        const data = await response.json();
        setBook(data);
      } catch (error) {
        alert("Erro ao carregar API: " + error);
      }
    }
    booksApi();
  }, []);

  return (
    <>
      <Container>
        {book.map((book, index) => (
          <Books key={index} data={book}></Books>
        ))}
      </Container>
      <Footer />
    </>
  );
}

export default Home;
