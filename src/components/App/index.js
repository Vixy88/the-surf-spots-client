import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import Restaurants from "../pages/Restaurants";
import LoginUser from "../pages/Login";
import SurfSpots from "../pages/Surfspots";
import SurfspotSearchFilter from "../common/search/SearchFilter";
import Layout from "../common/Layout";

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
    };
    fetchSurfspots();
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginUser />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route
              path="/surfspots"
              element={<SurfspotSearchFilter surfspots={surfspots} />}
            />
            <Route
              path="/surfspots-all"
              element={<SurfSpots surfspots={surfspots} />}
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
