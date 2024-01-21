import Table from "../../components/table/Table";
import { footballTableData } from "../../data/data";
import "../style/App.css";

function DefaultFootballTable() {
  return (
    <div className="center">
      <Table columns="5rem minmax(min-content, 1fr) repeat(4,5rem) 7rem 5rem">
        <Table.Header header="# Club PM W D L GD P" />
        <Table.Body data={footballTableData}></Table.Body>
      </Table>
    </div>
  );
}

export default DefaultFootballTable;
