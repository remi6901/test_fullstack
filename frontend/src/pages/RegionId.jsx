import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Form from "@components/AddLine";

function RegionId() {
  const { id } = useParams();
  const [getRegionById, setGetRegionByid] = useState("");
  const [getLine, setGetLine] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/regions/${id}`)
      .then((response) => response.data)
      .then((data) => setGetRegionByid(data));
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/lines`)
      .then((response) => response.data)
      .then((data) => setGetLine(data));
  }, []);

  return (
    <div>
      <img src={getRegionById.picture} alt="" />
      <h1>{getRegionById.name}</h1>
      <p>{getRegionById.description}</p>
      {getRegionById.id === 1 ? (
        <ul>
          {getLine &&
            getLine.map((line) => <li key={line.id}>{line.line_name}</li>)}
        </ul>
      ) : (
        ""
      )}
      <Form />
    </div>
  );
}

export default RegionId;
