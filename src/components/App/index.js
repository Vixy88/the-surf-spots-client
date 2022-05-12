import ButtonToggleMapView from "../Button/ButtonViewMap";
import DesktopHeader from "../Header/DesktopHeader";
import DisplaySurfspotsList from "../hooks/useSurfspots/SurfspotList";
import DesktopNav from "../Nav/DesktopNav";

const App = () => {
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
