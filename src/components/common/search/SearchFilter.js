import { useState, useEffect } from "react";
import ButtonToggleMapView from "../button/ButtonViewMap";
import { Link } from "react-router-dom";

const SurfspotSearchFilter = ({ surfspots }) => {
  const [, setSurfspots] = useState([]);
  // the value of the search field
  const [surfSpot, setSurfSpot] = useState("");
  // the search result
  const [foundSurfspots, setfoundSurfspots] = useState(surfspots);

  useEffect(() => {
    setfoundSurfspots(surfspots);
  }, [surfspots]);

  const filter = (e) => {
    let keyword = "";
    if (e) {
      keyword = e.target.value;
    }

    if (keyword !== "") {
      const result = surfspots.filter((surfspot) => {
        return surfspot.city.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setfoundSurfspots(result);
    } else {
      setfoundSurfspots(surfspots);
      // If the text field is empty, show all surfspots
    }

    setSurfSpot(keyword);
  };

  // console.log(surfspots);

  return (
    <>
      <div className="m-2 flex flex-row text-center justify-center px-10">
        <input
          type="search"
          value={surfSpot}
          onChange={filter}
          className="block w-full text-center p-2 border-grey-200 border-2"
          placeholder="Search by City to Find Surfspots near you"
        />
      </div>
      <div>
        <ButtonToggleMapView />
      </div>
      <section className="flex flex-wrap flex-row w-full px-10 justify-center">
        {foundSurfspots && foundSurfspots.length > 0 ? (
          foundSurfspots.map((surfspot) => (
            <div key={surfspot.id} className="mx-4 my-4 max-w-1/4">
              <div className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
                <div className="p-4 rounded-lg bg-white shadow-md">
                  <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
                    <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
                      <div className="absolute inset-0 bg-black opacity-60">
                        <img src={surfspot.image} alt={surfspot.name} />
                      </div>
                    </div>

                    <div className="absolute flex justify-center bottom-0 mb-3">
                      <div className="flex bg-transparent px-4 py-1 space-x-5 rounded-lg overflow-hidden">
                        <div className="flex items-center font-medium text-gray-800">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7"
                            viewBox="0 0 20 20"
                            fill="#FFCD3C"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7"
                            viewBox="0 0 20 20"
                            fill="#FFCD3C"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7"
                            viewBox="0 0 20 20"
                            fill="#FFCD3C"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7"
                            viewBox="0 0 20 20"
                            fill="#FFCD3C"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <span className="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-teal-500 text-sm font-medium text-white select-none">
                      {surfspot.city}
                    </span>
                  </div>

                  <div className="mt-4">
                    <h2
                      className="font-medium text-base md:text-lg text-gray-800 line-clamp-1"
                      title="New York"
                    >
                      {surfspot.name}
                    </h2>
                    <p
                      className="mt-2 text-sm text-gray-800 line-clamp-1"
                      title="New York, NY 10004, United States"
                    >
                      {surfspot.address + ", " + surfspot.postcode}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-8">
                    <div className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                      <span className="mt-2 xl:mt-0">
                        {surfspot.restaurants_nearby.length + " Restaurants"}
                      </span>
                    </div>
                    <div className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                      <span className="mt-2 xl:mt-0">4 Surf Shops</span>
                    </div>
                    <div className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        />
                      </svg>
                      <span className="mt-2 xl:mt-0">Beginner to Expert</span>
                    </div>
                    <div className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                      <span className="mt-2 xl:mt-0">Friendly Locals</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 mt-8">
                    <div className="flex items-center">
                      <div className="relative">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <a
                        href={surfspot.magic_seaweed_link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <p className="ml-2 text-gray-800 line-clamp-1">
                          Surf Forecast
                        </p>
                      </a>
                    </div>

                    <div className="flex justify-end">
                      <div className="flex font-semibold text-primary whitespace-nowrap leading-tight rounded-xl">
                        <span className="text-sm uppercase">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </span>
                        <a
                          href={`https://www.google.com/maps?saddr=My+Location&daddr=${
                            surfspot.address + ", " + surfspot.postcode
                          }`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <p className="ml-2 text-gray-800 line-clamp-1">
                            Directions
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col justify-center text-center items-center w-full">
            <img
              className="mx-auto h-12 w-auto"
              src="/logo_teal.png"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{" "}
              <Link
                to="/signup"
                className="font-medium text-teal-500 hover:text-teal-500"
              >
                Register Here
              </Link>
            </p>
          </div>
        )}
      </section>
    </>
  );
};

export default SurfspotSearchFilter;
