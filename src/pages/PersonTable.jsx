import Table from "../table/Table";
import "../style/App.css";
import { persomTableData } from "../data/data";

function PersonTable() {
  return (
    <div className="center">
      <Table columns="1fr 1fr 2fr .5fr 1fr">
        <Table.Header>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Address</th>
          <th>Age</th>
          <th>Phone </th>
        </Table.Header>
        <Table.Body data={persomTableData}></Table.Body>
      </Table>
    </div>
  );
}

export default PersonTable;
