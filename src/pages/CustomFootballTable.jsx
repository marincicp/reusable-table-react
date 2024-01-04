import Table from "../components/Table";
import "../style/App.css";
import { footballTableData } from "../data/data";
import CustomFootballRow from "../components/CustomFootballRow";

function CustomFootballTable() {
  return (
    <div className="center">
      <Table columns="1fr 3fr 1fr 1fr 1fr 1fr 1fr 1fr">
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

        <Table.Body
          data={footballTableData}
          render={(item) => <CustomFootballRow item={item} key={item[0]} />}
        ></Table.Body>
      </Table>
    </div>
  );
}

export default CustomFootballTable;
