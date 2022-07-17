const DisplaySurfspotsList = (props) => {
  const surfspots = [props.data];
  console.log(surfspots);
  return (
    <>
      <div>{surfspots.name}</div>
    </>
  );
};

export default DisplaySurfspotsList;
