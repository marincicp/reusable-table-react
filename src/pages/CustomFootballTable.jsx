import Table from "../components/Table";
import "../style/App.css";
import { footballTableData } from "../data/data";
import CustomFootballRow from "../components/CustomFootballRow";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { sortBy } from "lodash-es";

function CustomFootballTable() {
  const navigate = useNavigate();
  const [filter, setFilteredData] = useState([]);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (query === "") setFilteredData(footballTableData);
    if (query === "clubName") {
      let sortedArray = sortBy(footballTableData, ["obj", "club"]);
      setFilteredData(sortedArray);
    }

    if (query === "points") {
      let sortedArray = sortBy(footballTableData, ["obj", "points"]);
      setFilteredData(sortedArray);
    }

    // if ((filter = "")) setFilteredData(footballTableData);
  }, [query, filter]);

  function handleChangeFilter(queryStr) {
    setActive(false);
    if (queryStr === query) {
      setQuery("");
      setActive(false);
    } else {
      setQuery(queryStr);
      setActive(true);
    }
  }

  return (
    <div className="center">
      <Table columns="1fr 3fr 1fr 1fr 1fr 1fr 1fr 1fr">
        <Table.Header>
          <th>#</th>
          <Table.SortableHeaderCell
            active={active}
            onClick={() => handleChangeFilter("clubName")}
          >
            Club
          </Table.SortableHeaderCell>
          <th>PM</th>
          <th>W</th>
          <th>D</th>
          <th>L</th>
          <th>GD</th>
          <Table.SortableHeaderCell
            active={active}
            onClick={() => handleChangeFilter("points")}
          >
            Points
          </Table.SortableHeaderCell>
        </Table.Header>

        <Table.Body
          data={filter}
          render={(item) => <CustomFootballRow item={item} key={item[0]} />}
        ></Table.Body>
      </Table>
    </div>
  );
}

export default CustomFootballTable;
