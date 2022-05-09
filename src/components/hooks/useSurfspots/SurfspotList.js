import { useState, useEffect } from "react";

const DisplaySurfspotsList = () => {
  const [surfspots, setSurfspots] = useState([]);

  useEffect(() => {
    const fetchSurfspots = async () => {
      const response = await fetch("http://localhost:8000/surfspots/", {
        headers: {
          Authorization: process.env.API,
        },
      });
      const data = await response.json();
      setSurfspots(data);
      console.log(data);
    };
    fetchSurfspots();
  }, []);

  return (
    <>
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
    </>
  );
};

export default DisplaySurfspotsList;
