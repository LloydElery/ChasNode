import { useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  const [user, setUser]: any = useState(null);
  const [books, setBooks]: any = useState(null);
  const [id, setId]: any = useState(null);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const findUser = async () => {
    const url = `http://localhost:3000/user/people/${id}`;
    const response = await fetch(url);
    const result = await response.json();
    setUser(result);
  };

  const getBooks = async () => {
    const url = "http://localhost:3000/books";
    const response = await fetch(url);
    const result = await response.json();
    setBooks(result);
  };

  useEffect(() => {
    findUser();
    getBooks();
  }, []);

  return (
    <>
      <div>
        <form action="">
          <input
            ref={inputRef}
            onChange={(e) => setId(e.target.value)}
            type="text"
            placeholder="Find user"
            onKeyUp={() => findUser()}
          />
        </form>
      </div>
      <div>
        <button onClick={() => findUser()}>Find User</button>
        {user && (
          <div>
            <p>{user.user}</p>
            <p>{user.id}</p>
          </div>
        )}
      </div>
      <div>
        <h2>Book Listing</h2>
        {books &&
          books.books.map((book: any, id: number) => {
            return (
              <>
                <article>
                  <h3>{book.title}</h3>
                  <p>{book.author}</p>
                  <p>{book.pages}</p>
                </article>
              </>
            );
          })}
      </div>
    </>
  );
}

export default App;
