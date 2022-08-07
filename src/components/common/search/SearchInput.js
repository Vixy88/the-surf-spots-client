import { useEffect, useState } from "react";

const SearchInput = ({ surfspots }) => {
  const [query, setQuery] = useState("");
  const [searchParam] = useState(["name", "country", "city", "postcode"]);
  const [filterParam, setFilterParam] = useState(["All"]);

  function search(surfspots) {
    return surfspots.filter((surfspot) => {
      if (surfspot.city == filterParam) {
        return searchParam.some((newSurfspot) => {
          return (
            surfspot[newSurfspot]
              .toString()
              .toLowerCase()
              .indexOf(query.toLowerCase()) > -1
          );
        });
      } else if (filterParam == "All") {
        return searchParam.some((newSurfspot) => {
          return (
            surfspot[newSurfspot]
              .toString()
              .toLowerCase()
              .indexOf(query.toLowerCase()) > -1
          );
        });
      }
    });
  }

  return (
    <>
      <div>
        <label htmlFor="search-form">
          <input
            type="search"
            name="search-form"
            id="search-form"
            placeholder="Search for..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <span>Search countries here</span>
        </label>
        <div>
          <select
            onChange={(e) => {
              setFilterParam(e.target.value);
            }}
            className="custom-select"
            aria-label="Filter Countries By Countries"
          >
            <option value="All">Filter By City</option>
            <option value="Burgau">Burgau</option>
            <option value="Lisbon">Lisbon</option>
            <option value="Porto">Porto</option>
            <option value="Carrapaterin">Carrapaterin</option>
            <option value="Omado">Omado</option>
          </select>
          <span className="focus"></span>
        </div>
      </div>
      <ul>
        {search(surfspots).map((surfSpot) => (
          <li key={surfSpot.id}>
            {surfSpot.name} {surfSpot.country} {surfSpot.city}{" "}
            {surfSpot.postcode}
          </li>
        ))}
      </ul>
    </>
  );
};

export default SearchInput;
