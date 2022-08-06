import { useEffect, useState } from "react";

const SearchInput = ({ surfspots }) => {
  const [query, setQuery] = useState("");
  const [searchParam] = useState("name", "country", "city", "postcode");
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [surfSpots, setSurfSpots] = useState([]);

  useEffect(() => {}, []);

  if (error) {
    return <>Error: {error.message}</>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {surfSpots.map((surfSpot) => (
          <li key={item.id}>{surfSpot.name}</li>
        ))}
      </ul>
    );
  }
};

export default SearchInput;
