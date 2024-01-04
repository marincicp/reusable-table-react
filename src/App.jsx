import { NavLink, Route, Routes } from "react-router-dom";
import "./style/App.css";
import { CustomFootballTable, DefaultFootballTable } from "./pages";

function App() {
  return (
    <div className="home">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/customFootball">Custom football</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<DefaultFootballTable />} />
        <Route path="/customFootball" element={<CustomFootballTable />} />
      </Routes>
    </div>
  );
}

export default App;
