import { useState, useEffect } from "react";
import axios from "axios";

function UpdateLine() {
  const [getRegion, setGetRegion] = useState("");
  const [getLine, setGetLine] = useState("");
  const [lineId, setLineId] = useState("");
  const [line, setLine] = useState({
    id_region: "",
    line_name: "",
    picture: "toto",
  });

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/regions`)
      .then((response) => response.data)
      .then((data) => setGetRegion(data));
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/lines`)
      .then((response) => response.data)
      .then((data) => setGetLine(data));
  }, []);

  function updateLineWithId() {
    axios.put(`${import.meta.env.VITE_BACKEND_URL}/lines/${lineId}`, {
      ...line,
    });
  }
  return (
    <div className="container">
      <h1>Modifier une ligne</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateLineWithId();
        }}
      >
        <select
          onChange={(e) => {
            setLineId(e.target.value);
          }}
        >
          <option>Choisir une ligne</option>
          {getLine &&
            getLine.map((lines) => (
              <option value={lines.id} key={lines.id}>
                {lines.line_name}
              </option>
            ))}
        </select>
        <br />
        <select
          onChange={(e) => setLine({ ...line, id_region: e.target.value })}
        >
          <option>Choisir une region</option>
          {getRegion &&
            getRegion.map((region) => (
              <option value={region.id} key={region.id}>
                {region.name}
              </option>
            ))}
        </select>
        <br />
        <input
          type="text"
          placeholder="Nom de ligne"
          value={line.line_name}
          onChange={(e) => setLine({ ...line, line_name: e.target.value })}
        />
        <br />
        <input
          type="text"
          placeholder="picture"
          value={line.picture}
          onChange={(e) => setLine({ ...line, picture: e.target.value })}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default UpdateLine;
