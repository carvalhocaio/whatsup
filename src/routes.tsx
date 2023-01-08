import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

export function MappedRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
