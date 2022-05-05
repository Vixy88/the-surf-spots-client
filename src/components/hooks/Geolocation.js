import React, { useEffect, useState } from "react";

const GetUserLocation = () => {
  const [userPosition, setUserPosition] = useState({});

  useEffect(() => {
    if (!navigator.geolocation) {
      alert(
        "Geolocation is not supported by your browser! We recommend using Google Chrome"
      );
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserPosition({
          ...position,
          defaultLatitude: position.coords.latitude,
          defaultLongitude: position.coords.longitude,
        });
      });
    }
  }, []);

  return (
    <div>
      <form>
        <button>Find Surfspots Near me</button>
        {/* {setUserPosition} */}
      </form>
    </div>
  );
};

export default GetUserLocation;
