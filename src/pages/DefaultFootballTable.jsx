import Table from "../table/Table";
import "../style/App.css";
import { footballTableData } from "../data/data";

function DefaultFootballTable() {
  return (
    <div className="center">
      <Table columns="5rem minmax(min-content, 1fr) repeat(4,5rem) 7rem 5rem">
        <Table.Header>
          <th>#</th>
          <th>Club</th>
          <th>PM</th>
          <th>W</th>
          <th>D</th>
          <th>L</th>
          <th>GD</th>
          <th>P</th>
        </Table.Header>

        <Table.Body data={footballTableData}></Table.Body>
      </Table>
    </div>
  );
}

export default DefaultFootballTable;
