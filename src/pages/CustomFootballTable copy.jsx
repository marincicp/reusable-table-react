import { useEffect, useState } from "react";
import Table from "../table/Table";
// import CustomFootballRow from "../components/CustomFootballRow";
import { useCustomFootballTableContext } from "../context/CustomFootballTableContext";
import { filters } from "../constants/footballTableConstants";
import "../style/App.css";
import CutomRowCopy from "../components/CustomRowCopy";
import Menus from "../menus/Menus";

function CustomFootballTable() {
  const { tableData, sortData } = useCustomFootballTableContext();

  const [filter, setFilter] = useState("");

  function handleChangeFilter(queryStr) {
    if (queryStr === filter) {
      setFilter("");
    } else {
      setFilter(queryStr);
    }
  }

  useEffect(() => {
    sortData(filter);
  }, [filter]);

  return (
    <div className="center">
      <Menus>
        <Table columns="5rem minmax(min-content, 1fr) repeat(4,minmax(min-content, .5fr)) 7rem 5rem">
          <Table.Header>
            <th>#</th>
            <Table.SortableHeaderCell
              active={filter === filters.clubName}
              onClick={() => handleChangeFilter(filters.clubName)}
            >
              Club
            </Table.SortableHeaderCell>
            <th>PM</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>GD</th>
            <Table.SortableHeaderCell
              active={filter === filters.points}
              onClick={() => handleChangeFilter(filters.points)}
            >
              Points
            </Table.SortableHeaderCell>
          </Table.Header>

          <Table.Body
            data={tableData}
            render={(item) => <CutomRowCopy key={item.club} item={item} />}
          ></Table.Body>
        </Table>
      </Menus>
    </div>
  );
}

export default CustomFootballTable;
