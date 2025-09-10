import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import ViewAll from "../components/viewAll/ViewAll";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view/:string" element={<ViewAll />} />
      </Routes>
    </Router>
  );
}

export default App;
