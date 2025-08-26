import { useState } from "react";

function App() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const addBook = () => {
    if (title && author) {
      setBooks([...books, { title, author }]);
      setTitle("");
      setAuthor("");
    }
  };

  return (
    <div>
      <h1>Mini Library</h1>
      <h2>Hello, Developer!</h2>

      <h3>Books</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button onClick={addBook}>Add Book</button>

      <ul>
        {books.map((book, i) => (
          <li key={i}>
            <b>{book.title}</b> — {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

