import { useState } from "react";
import BookForm from "../BookForm/BookForm";
import "./NewBook.css";

const NewBook = ({ onBookAdded }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="new-book">
      {showForm ? (
        <BookForm onBookAdded={onBookAdded} setShowForm={setShowForm} />
      ) : (
        <button onClick={() => setShowForm(true)}>Agregar Libro</button>
      )}
    </div>
  );
};

export default NewBook;
