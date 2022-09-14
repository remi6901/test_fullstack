import axios from "axios";
import { useEffect, useState } from "react";

function DeleteLine() {
  const [getLine, setGetLine] = useState();
  const [value, setValue] = useState();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/lines`)
      .then((response) => response.data)
      .then((data) => setGetLine(data));
  }, []);

  function deliteLineWithId() {
    axios.delete(`${import.meta.env.VITE_BACKEND_URL}/lines/${value}`);
  }
  return (
    <div className="container">
      <h1>Supprimer une ligne</h1>
      <select onChange={(e) => setValue(e.target.value)}>
        <option>---</option>
        {getLine &&
          getLine.map((line) => (
            <option key={line.id} value={line.id}>
              {line.line_name}
            </option>
          ))}
      </select>
      <button type="button" onClick={deliteLineWithId}>
        Supprimer
      </button>
    </div>
  );
}

export default DeleteLine;
