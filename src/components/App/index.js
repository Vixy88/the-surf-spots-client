import { useEffect, useState } from "react";
import GetUserLocation from "../hooks/Geolocation";

const App = () => {
  const [surfspots, setSurfspots] = useState([]);

  useEffect(() => {
    const fetchSurfspots = async () => {
      const response = await fetch("http://localhost:8000/surfspots/", {
        headers: {
          Authorization: "Token 510dc64bc19021253775fef77ac69d9bb5e93bda",
        },
      });
      const data = await response.json(response);
      console.log(data);
      setSurfspots(data);
    };
    fetchSurfspots();
  }, []);

  return (
    <div className="App">
      <a href="#">
        <div className="header-logo">
          <img src="/surfspots_logo_black_bg.png" alt="The Surfspots Logo" />
        </div>
      </a>
      <GetUserLocation />
      <div className="wide-container">
        {surfspots.map((surfspot) => (
          <div key={surfspot.id} className="img-container">
            <a href="#">
              <img src={surfspot.image} alt={surfspot.name} />
            </a>
            <h2>
              {surfspot.name} {surfspot.id}
            </h2>
            <div>
              <a
                href={`https://www.google.co.uk/maps/dir//${surfspot.postcode}`}
                target="_blank"
                rel="noreferrer"
              >
                🗺 Get Directions
              </a>
              <a
                href={surfspot.magic_seaweed_link}
                target="_blank"
                rel="noreferrer"
              >
                🏄🏽‍♂️ Surf Forecast
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
