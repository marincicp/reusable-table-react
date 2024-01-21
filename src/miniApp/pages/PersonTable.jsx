import Table from "../../components/table/Table";
import "../style/App.css";
import { personTableData } from "../../data/data";
import ActionMenu from "../../components/actionMenu/ActionMenu";
import { CustomPersonRow } from "../components";
import { useState } from "react";
function PersonTable() {
  const [personData, setPersonData] = useState(personTableData);

  function handleDelete(id) {
    const filtered = personData.filter((item) => item.id !== id);
    setPersonData(filtered);
  }

  return (
    <div className="center">
      <ActionMenu>
        <Table columns="1fr 1fr 2fr .5fr 1fr .5fr">
          <Table.Header>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Age</th>
            <th>Phone </th>
          </Table.Header>
          <Table.Body
            data={personData}
            render={(person) => (
              <CustomPersonRow
                key={person.id}
                data={person}
                handleDelete={handleDelete}
              />
            )}
          ></Table.Body>
        </Table>
      </ActionMenu>
    </div>
  );
}

export default PersonTable;
