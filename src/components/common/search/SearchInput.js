import { useEffect, useState } from "react";

const SearchInput = () => {
  const [query, setQuery] = useState("");
  const [searchParam] = useState("name", "country", "city", "postcode");
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {}, []);

  if (error) {
    return <>Error: {error.message}</>;
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      
    )
  }
};
