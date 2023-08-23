import React from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";


const MapView = ({ openDetail, setShowDetail }) => {
  const store = useSelector((store) => store);
  return (
    <div>
      {/* harita */}
      <MapContainer
        center={[39.146078, 34.159499]}
        zoom={6}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* herbir ucus icin ekranda ucagin konumuna denk gelen marker basmak */}
        {store?.flights.map((fly) => (
          <Marker key={fly.id} position={[fly.lat, fly.lan]}>
            <Popup>
              <div className="popup">
                <span>kod: {fly.code}</span>
                <button onClick={() => setShowDetail(fly.id)}>Detay</button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
