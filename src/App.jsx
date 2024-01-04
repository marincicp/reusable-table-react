import Table from "./components/Table";
import "./style/App.css";
import { footballTableData } from "./data/data";
// const data = [
//   { cabin: "Jedan", capacity: 5, price: 34, discount: 4 },
//   { cabin: "Jedan", capacity: 5, price: 34, discount: 4 },
//   { cabin: "Jedan", capacity: 5, price: 34, discount: 4 },
//   { cabin: "Jedan", capacity: 5, price: 34, discount: 4 },
//   { cabin: "Jedan", capacity: 5, price: 34, discount: 4 },
// ];

function App() {
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

        <Table.Body data={footballTableData}></Table.Body>
      </Table>
    </div>
  );
}

export default App;
