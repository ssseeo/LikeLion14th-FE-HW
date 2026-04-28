import React, { useEffect, useRef } from "react";
import "./Map.css";
import pointer from "../assets/img/pointer.png";

export const Map = () => {
  const container = useRef(null);

  useEffect(() => {
    const { kakao } = window;

    if (!kakao) {
      console.error("카카오맵 SDK가 로드되지 않았습니다.");
      return;
    }

    const position = new kakao.maps.LatLng(37.591310, 127.022131);

    const options = {
      center: position,
      level: 3,
    };

    const map = new kakao.maps.Map(container.current, options);
    const ps = new kakao.maps.services.Places();
    const bounds = new kakao.maps.LatLngBounds();

    const places = [
      "카페뮬 성신여대",
      "와플앨리 성신여대점",
      "세시 성신여대",
    ];

    places.forEach((keyword) => {
      ps.keywordSearch(keyword, (data, status) => {
        if (status === kakao.maps.services.Status.OK) {
          const coords = new kakao.maps.LatLng(
            data[0].y,
            data[0].x
          );

          new kakao.maps.CustomOverlay({
            map: map,
            position: coords,
            content: `<img src="${pointer}" class="map-pointer" />`,
            xAnchor: 0.5,
            yAnchor: 1,
          });

          bounds.extend(coords);
          map.setBounds(bounds);
        }
      });
    });
  }, []);

  return (
    <div className="map-container">
      <div className="place-list">
        <h2>My Hot-place Map</h2>
        <h3>Saved Places</h3>
        
        <div className="place-card">
          <img src={pointer} className="card-pointer" alt="" />
          <div className="place-text">
            <p className="place-name">카페뮬</p>
            <p className="place-address">
              서울 성북구 동소문로22길 64 2층
            </p>
          </div>
        </div>

        <div className="place-card">
          <img src={pointer} className="card-pointer" alt="" />
          <div className="place-text">
            <p className="place-name">와플앨리 성신여대점</p>
            <p className="place-address">
              서울 성북구 보문로34길 68-3 1층
            </p>
          </div>
        </div>

        <div className="place-card">
          <img src={pointer} className="card-pin" alt="" />
          <div className="place-text">
            <p className="place-name">세시</p>
            <p className="place-address">
              서울 성북구 동소문로22길 60 2층
            </p>
          </div>
        </div>
      </div>

      <div ref={container} className="map"></div>
    </div>
  );
};