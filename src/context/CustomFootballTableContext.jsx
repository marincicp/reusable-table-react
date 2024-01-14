import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import { sortBy } from "lodash-es";
import { footballTableData } from "../data/data";
import { sortByFilter, filters } from "../constants/footballTableConstants";

const CustomFootballTableContext = createContext();

export function CustomFootballTableProvider({ children }) {
  const [tableData, setTableData] = useState(footballTableData);

  function sortData(sortQuery) {
    if (sortQuery === "") {
      return setTableData(footballTableData);
    }

    if (sortQuery === "") {
      return setTableData(footballTableData);
    }

    if (sortQuery === filters.clubName) {
      let sortedArray = sortBy(tableData, ["obj", sortByFilter.club]);
      return setTableData(sortedArray);
    }

    if (sortQuery === filters.points) {
      let sortedArray = sortBy(tableData, ["obj", sortByFilter.points]);
      return setTableData(sortedArray);
    }
  }

  return (
    <CustomFootballTableContext.Provider value={{ tableData, sortData }}>
      {children}
    </CustomFootballTableContext.Provider>
  );
}

export function useCustomFootballTableContext() {
  const context = useContext(CustomFootballTableContext);

  if (context === undefined) {
    throw new Error(
      "FootballTableContext must be used within a CustomFootballTableContextProvider"
    );
  }

  return context;
}

CustomFootballTableProvider.propTypes = {
  children: PropTypes.array,
};
