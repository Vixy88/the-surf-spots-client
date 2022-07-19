import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import Home from "../pages/Home";
import RegisterSurfspot from "../pages/RegisterSurfspot";
import SignUpNew from "../pages/SignUpNew";
import Restaurants from "../pages/Restaurants";
import SurfSpots from "../pages/Surfspots";
import SurfspotSearchFilter from "../common/search/SearchFilter";
import Layout from "../common/Layout";

const App = () => {
  const [surfspots, setSurfspots] = useState([]);

  useEffect(() => {
    const fetchSurfSpots = async () => {
      try {
        const { data, error } = await supabase.from("surfspots").select();
        setSurfspots(data);
      } catch (error) {
        alert(error.error_description || error.message);
      }
    };
    fetchSurfSpots();
    console.log("Surfspots have been fetched");
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<SignUpNew />} />
            <Route path="/signup" element={<SignUpNew />} />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route
              path="/surfspots"
              element={<SurfspotSearchFilter surfspots={surfspots} />}
            />
            <Route path="/register-surfspot" element={<RegisterSurfspot />} />
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
