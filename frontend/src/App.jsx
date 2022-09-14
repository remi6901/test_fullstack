import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegionId from "./pages/RegionId";
import Region from "./pages/Region";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <Router>
      <div className="App" />
      <Routes>
        <Route path="/" element={<Region />} />
        <Route path="/admins" element={<AdminPage />} />
        <Route path="/regions/:id" element={<RegionId />} />
      </Routes>
    </Router>
  );
}

export default App;
