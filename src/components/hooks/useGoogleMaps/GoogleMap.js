import { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapContainer = () => {
  const [currentPosition, setCurrentPosition] = useState({});

  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const currentPosition = {
      lat: latitude,
      lng: longitude,
    };
    setCurrentPosition(currentPosition);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  const mapStyles = {
    height: "50vh",
    width: "100%",
  };

  // const locations = [
  //   {
  //     name: "Location 1",
  //     location: {
  //       lat: 41.3954,
  //       lng: 2.162,
  //     },
  //   },
  //   {
  //     name: "Location 2",
  //     location: {
  //       lat: 41.3917,
  //       lng: 2.1649,
  //     },
  //   },
  //   {
  //     name: "Location 3",
  //     location: {
  //       lat: 41.3773,
  //       lng: 2.1585,
  //     },
  //   },
  //   {
  //     name: "Location 4",
  //     location: {
  //       lat: 41.3797,
  //       lng: 2.1682,
  //     },
  //   },
  //   {
  //     name: "Location 5",
  //     location: {
  //       lat: 41.4055,
  //       lng: 2.1915,
  //     },
  //   },
  // ];

  return (
    <LoadScript googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={currentPosition}
      >
        {currentPosition.lat && <Marker position={currentPosition} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
