import DisplaySurfspotsList from "../hooks/useSurfspots/SurfspotList";
import ButtonToggleMapView from "../common/button/ButtonViewMap";

const SurfSpots = () => {
  return (
    <>
      <ButtonToggleMapView />
      <DisplaySurfspotsList />
    </>
  );
};

export default SurfSpots;
