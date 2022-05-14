import { useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const MapContainer = () => {
  // const [surfspots, setSurfspots] = useState([]);
  const [currentPosition, setCurrentPosition] = useState({});
  // const [activeMarker, setActiveMarker] = useState(null);
  // const [surfSpot, setSurfSpot] = useState([]);

  // useEffect(() => {
  //   const fetchSurfspots = async () => {
  //     const response = await fetch("http://localhost:8000/surfspots/", {
  //       headers: {
  //         Authorization: process.env.API,
  //       },
  //     });
  //     const data = await response.json();
  //     setSurfspots(data);
  //   };
  //   fetchSurfspots();
  // }, []);

  // const markers = [
  //   {
  //     id: 1,
  //     name: "Praia Do Burgau, Portugal",
  //     position: {
  //       lat: 37.072896250042916,
  //       lng: -8.775105858235149,
  //     },
  //   },
  //   {
  //     id: 2,
  //     name: "Praia das Cabanas Velhas, Portugal",
  //     position: { lat: 37.0668698387628, lng: -8.794676273851543 },
  //   },
  //   {
  //     id: 3,
  //     name: "Salema Beach, Portugal",
  //     position: { lat: 37.06645939084482, lng: -8.8237717113133 },
  //   },
  // ];

  // const handleActiveMarker = (marker) => {
  //   if (marker === activeMarker) {
  //     return;
  //   }
  //   setActiveMarker(marker);
  // };

  useEffect(() => {
    const success = (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const currentPosition = {
        lat: latitude,
        lng: longitude,
      };
      setCurrentPosition(currentPosition);
    };
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  const mapStyles = {
    height: "50vh",
    width: "100%",
  };

  return (
    <LoadScript googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={currentPosition}
      >
        {currentPosition.lat && <Marker position={currentPosition} />}
        {/* {markers.map(({ id, name, position }) => (
          <Marker key={id} position={position}></Marker>
        ))} */}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
