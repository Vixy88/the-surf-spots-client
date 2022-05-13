// Button that toggles the display of Google Maps with the users location

import { useState } from "react";
import MapContainer from "../../hooks/useGoogleMaps/GoogleMap";

const ButtonToggleMapView = () => {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="ml-12">
      <button onClick={() => setShowMap(!showMap)}>
        {!showMap ? "View Map" : "Hide Map"}
      </button>
      {showMap ? <MapContainer /> : <></>}
    </div>
  );
};

export default ButtonToggleMapView;
