import { Route, Routes } from "react-router-dom";
import {
  CustomFootballTable,
  DefaultFootballTable,
  PersonTable,
} from "../src/miniApp/pages";
import { Logo, Nav } from "../src/miniApp/components";
import { CustomFootballTableProvider } from "../src/miniApp/context/CustomFootballTableContext";

import "../src/miniApp/style/App.css";

function App() {
  return (
    <div className="home">
      <div className="nav">
        <Logo />

        <Nav />
      </div>

      <Routes>
        <Route path="/basicTable" element={<DefaultFootballTable />} />
        <Route index path="/" element={<PersonTable />} />

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
