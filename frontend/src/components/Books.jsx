import React, { useEffect, useState } from 'react';
import { getBooks, addBook } from '../api';

function Books() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    getBooks().then(data => setBooks(data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBook = { id: books.length + 1, title, author };
    const saved = await addBook(newBook);
    setBooks([...books, saved]);
    setTitle("");
    setAuthor("");
  };

  return (
    <div>
      <h2>Books</h2>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
        <input value={author} onChange={e => setAuthor(e.target.value)} placeholder="Author" />
        <button type="submit">Add Book</button>
      </form>
      <ul>
        {books.map(b => <li key={b.id}>{b.title} - {b.author}</li>)}
      </ul>
    </div>
  );
}

export default Books;
