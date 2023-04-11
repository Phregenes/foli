import React, { useState, useEffect } from "react";
import "./styles.css";
import noImage from "../../assets/img/noimage.png";

import { Link } from "react-router-dom";

function PlantSearch() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  async function fetchPlants() {
    try {
      const response = await fetch(
        `http://localhost:3001/api/plants?name=${searchTerm}&page=${currentPage}`
      );
      const data = await response.json();
      setPlants(data.data);
    } catch (error) {
      console.error(error);
      setPlants([]);
    }
  }

  useEffect(() => {
    if (searchTerm) {
      fetchPlants();
    } else {
      setPlants([]);
    }
  }, [searchTerm, currentPage]);

  function handleSearch(event) {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  }

  useEffect(() => {
    setPlants([]);
  }, [searchTerm, currentPage]);

  return (
    <div>
      <div className="plantSearch__search">
        <h2>Plant Search</h2>
        <input type="text" onChange={handleSearch} />
        <p>
          Showing {plants?.length} results on page {currentPage}
        </p>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous Page
        </button>
        <button
          disabled={plants?.length === 0}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next Page
        </button>
      </div>
      <div className="plantSearch__box">
        {plants &&
          plants.map((plant) => (
            <div className="plantSearch__box--reult" key={plant.id}>
              <Link to={`/search/${plant.id}`} key={plant.id}>{plant.scientific_name}</Link>
              <div>{plant.common_name || "Nome comum não encontrado"}</div>
              <img
                className="plantSearch__img"
                src={plant.image_url ? plant.image_url : noImage}
                alt={plant.common_name}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default PlantSearch;
