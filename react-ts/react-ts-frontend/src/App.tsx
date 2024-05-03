import { useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  const [user, setUser]: any = useState(null);
  const [id, setId]: any = useState(null);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const findUser = async () => {
    const url = `http://localhost:3000/user/people/${id}`;
    const response = await fetch(url);
    const result = await response.json();
    setUser(result);
  };

  const findUserById = () => {
    const userSearch = inputRef.current!.value;
    setId(userSearch);
  };

  useEffect(() => {
    findUser();
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
    </>
  );
}

export default App;
