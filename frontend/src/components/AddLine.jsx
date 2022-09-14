import axios from "axios";
import { useEffect, useState } from "react";

function AddLine() {
  const [getRegion, setGetRegion] = useState("");
  const [line, setLine] = useState({
    id_region: "",
    line_name: "",
    picture: "",
  });

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/regions`)
      .then((response) => response.data)
      .then((data) => setGetRegion(data));
  }, []);

  function createLine() {
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/lines`, { ...line });
    /* .then(console.error(response))
      .then(console.error(response.data)); */
  }
  return (
    <div className="container">
      <h1>Ajouter une ligne</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createLine();
        }}
      >
        <select
          onChange={(e) => setLine({ ...line, id_region: e.target.value })}
        >
          <option>Choisir la region</option>
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

export default AddLine;
