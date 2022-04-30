import React from "react";
import { Container } from "./style";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Data from "../../data/locationdata.json";

export const MapPage = () => {
  const [activeItem, setActiveItem] = React.useState();
  return (
    <Container>
      <MapContainer center={[-23.99482, -46.256901]} zoom={12}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {Data.users.map((user) => (
          <Marker
            key={user.properties.USER_ID}
            position={[
              user.geometry.coordinates[0],
              user.geometry.coordinates[1],
            ]}
            onClick={() => setActiveItem("oi")}
          />
        ))}
        {activeItem && (
          <Popup
            position={[
              activeItem.geometry.coordinates[0],
              activeItem.geometry.coordinates[1],
            ]}
            onClose={() => {
              setActiveItem(null);
            }}
          >
            <div>
              <h2>{activeItem.properties.NAME}</h2>
              <p>{activeItem.properties.DESCRIPTION}</p>
            </div>
          </Popup>
        )}
      </MapContainer>
    </Container>
  );
};
