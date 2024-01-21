import { NavLink, Route, Routes } from "react-router-dom";
import "../src/miniApp/style/App.css";
import {
  CustomFootballTable,
  DefaultFootballTable,
  PersonTable,
} from "../src/miniApp/pages";

import { Logo, Nav } from "../src/miniApp/components";
import { CustomFootballTableProvider } from "../src/miniApp/context/CustomFootballTableContext";

function App() {
  return (
    <div className="home">
      {/* <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/customFootball">Custom football</NavLink>
        <NavLink to="/personTable">Person Table</NavLink>
      </nav> */}
      <div className="nav">
        <Logo />

        <Nav />
      </div>

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
