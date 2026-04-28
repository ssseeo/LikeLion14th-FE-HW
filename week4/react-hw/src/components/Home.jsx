import React, { useState } from "react";
import Main from "./Main";

export default function Home() {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const places = [
    {
      name: "카페뮬",
      address: "서울 성북구 동소문로22길 64 2층",
    },
    {
      name: "와플앨리 성신여대점",
      address: "서울 성북구 보문로34길 68-3 1층",
    },
    {
      name: "세시",
      address: "서울 성북구 동소문로22길 60 마루채 2층 201호",
    },
  ];

  return (
    <div className="map-container">

      <div className="place-list">
        <h2>My Hot-place Map</h2>
        <h3>Saved Places</h3>

        {places.map((place, idx) => (
          <div className="place-card" key={idx}>
            <p className="place-name">{place.name}</p>
            <p className="place-address">{place.address}</p>
          </div>
        ))}
      </div>

      <div className="map-container">
        <Main
          places={places}
          setSelectedPlace={setSelectedPlace}
        />
      </div>

    </div>
  );
}