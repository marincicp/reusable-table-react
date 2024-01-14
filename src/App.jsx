import { NavLink, Route, Routes } from "react-router-dom";
import "./style/App.css";
import {
  CustomFootballTable,
  DefaultFootballTable,
  PersonTable,
} from "./pages";
import { CustomFootballTableProvider } from "./context/CustomFootballTableContext";

function App() {
  return (
    <div className="home">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/customFootball">Custom football</NavLink>
        <NavLink to="/personTable">Person Table</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<DefaultFootballTable />} />
        <Route path="/personTable" element={<PersonTable />} />

        <Route
          path="/customFootball"
          element={
            <CustomFootballTableProvider>
              <CustomFootballTable />
            </CustomFootballTableProvider>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
