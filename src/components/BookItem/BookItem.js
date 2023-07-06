import { useState } from "react";
import BookCard from "../BookCard/BookCard";
import DateRead from "../dateRead/DateRead";
import "./BookItem.css";

const BookItem = ({ title, author, dateRead, pageCount }) => {
  const [bookTitle, setBookTitle] = useState(title);
  const [bookAuthor, setBookAuthor] = useState(author);

  const clickChangeTitleHandler = () => {
    setBookTitle("Actualizado");
  };

  return (
    <BookCard>
      <h2>{bookTitle}</h2>
      <h3>{author}</h3>
      <DateRead dateRead={dateRead} />
      <p>{pageCount} páginas</p>
      <button onClick={clickChangeTitleHandler}>cambiar titulo</button>
    </BookCard>
  );
};

export default BookItem;
