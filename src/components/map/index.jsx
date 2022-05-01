import React from "react";
import { Container } from "./style";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Data from "../../data/locationdata.json";

export const Maps = ({ MaterialType }) => {
  const [activeItem, setActiveItem] = React.useState(null);
  const [filterInfo, SetFilterInfo] = React.useState([]);

  const setType = (material) => {
    const data = Data.users.filter((elem) => elem.properties.TYPE === material);
    SetFilterInfo(data);
  };

  const [location, setLocation] = React.useState({
    loaded: false,
    coordinates: { lat: "", lng: "" },
  });
  console.log(location.coordinates.lat);

  const onSuccess = (location) => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
    });
  };
  const onError = (error) => {
    setLocation({
      loaded: true,
      error,
    });
  };
  React.useEffect(() => {
    if (MaterialType === "paper") {
      setType("paper");
    }
    if (MaterialType === "glass") {
      setType("glass");
    }
    if (!("geolocation" in navigator)) {
      onError({
        code: 0,
        message: "Geolocation not supported",
      });
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  console.log(filterInfo);
  return (
    <Container>
      <MapContainer
        center={
          location
            ? [location.coordinates.lat, location.coordinates.lng]
            : [-23.99482, -46.256901]
        }
        zoom={12}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {filterInfo.map((user) => {
          return (
            user.properties.ACTIVE && (
              <Marker
                key={user.properties.USER_ID}
                position={[
                  user.geometry.coordinates[0],
                  user.geometry.coordinates[1],
                ]}
                eventHandlers={{
                  click: () => setActiveItem(user),
                }}
              >
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
                      <h4>{activeItem.properties.ADDRESS}</h4>
                    </div>
                  </Popup>
                )}
              </Marker>
            )
          );
        })}
      </MapContainer>
    </Container>
  );
};
