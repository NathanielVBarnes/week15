import React, { useState, useEffect } from "react";
import House from "./House";
import NewHouseForm from "./NewHouseForm";
import { housesApi } from "./HousesApi.jsx";

export default function HousesList() {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetchHouses();
  }, []);

  const fetchHouses = async () => {
    const newHouses = await housesApi.get();
    newHouses.sort((a, b) => b._id - a._id);
    setHouses(newHouses);
  };

  const updateHouse = async (updatedHouse) => {
    await housesApi.put(updatedHouse);
    fetchHouses();
  };

  const addHouse = async (house) => {
    await housesApi.post(house);
    fetchHouses();
  };

  const deleteHouse = async (id) => {
    await housesApi.delete(id);
    fetchHouses();
  };

  return (
    <div className="container">
      <div className="row mt-2">
        <div className="col-sm">
          <h1>House List</h1>
        </div>
        <div className="col-sm-8 d-flex flex-row-reverse">
          <NewHouseForm addHouse={addHouse} />
        </div>
      </div>
      <div className="row">
        {houses.map((house) => (
          <House
            key={house._id}
            house={house}
            updateHouse={updateHouse}
            deleteHouse={deleteHouse}
          />
        ))}
      </div>
    </div>
  );
}
