import { Link } from "react-router-dom";

const DisplayFooter = () => {
  return (
    <footer className="left-0 bottom-0 fixed w-full">
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-yellow-600">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-black"
            >
              find surf spot
            </Link>
            <Link
              to="/signup"
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            >
              sign up
            </Link>
            <Link
              to="/login"
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            >
              log in
            </Link>
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default DisplayFooter;
