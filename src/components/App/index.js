import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SurfSpots from "../pages/Surfspots";
import Layout from "../common/Layout";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/surfspots" element={<SurfSpots />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
