import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/region.css";

function Region() {
  const [getAllRegion, setGetAllRegion] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/regions`)
      .then((response) => response.data)
      .then((data) => setGetAllRegion(data));
  }, []);
  return (
    <div className="globalDivRegion">
      <h1>Region</h1>
      <a href="/admins">
        <h3>Admin</h3>
      </a>
      <section className="sectionRegion">
        {getAllRegion &&
          getAllRegion.map((region) => (
            <Link to={`/regions/${region.id}`}>
              <div className="divRegion" key={region.id}>
                <img
                  className="pictureRegion"
                  src={region.picture}
                  alt="region"
                />
                <h1>{region.name}</h1>
              </div>
            </Link>
          ))}
      </section>
    </div>
  );
}

export default Region;
