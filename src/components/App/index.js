import { useEffect, useState } from "react";
import ButtonToggleMapView from "../Button/ButtonViewMap";
import DesktopHeader from "../Header/DesktopHeader";
import DisplaySurfspotsList from "../hooks/useSurfspots/SurfspotList";
import DesktopNav from "../Nav/DesktopNav";

const App = () => {
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
    <div className="App">
      <DesktopHeader />
      <DesktopNav />

      <ButtonToggleMapView />
      <DisplaySurfspotsList />
    </div>
  );
};

export default App;
