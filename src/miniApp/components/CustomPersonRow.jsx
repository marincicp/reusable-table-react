import ActionMenu from "../../components/actionMenu/ActionMenu";
import Table from "../../components/table/Table";
import PropTypes from "prop-types";
import { FaTrashAlt } from "react-icons/fa";
function CustomPersonRow({ data, handleDelete }) {
  return (
    <Table.Row>
      <Table.Cell>{data.ime}</Table.Cell>
      <Table.Cell>{data.prezime}</Table.Cell>
      <Table.Cell>{data.adresa}</Table.Cell>
      <Table.Cell>{data.godine}</Table.Cell>
      <Table.Cell>{data.brojTelefona}</Table.Cell>
      <Table.Cell>
        <ActionMenu.Menu>
          <ActionMenu.Toggle id={data.id} />
          <ActionMenu.List id={data.id}>
            <ActionMenu.Button onClick={() => handleDelete(data.id)}>
              <FaTrashAlt /> Delete
            </ActionMenu.Button>
          </ActionMenu.List>
        </ActionMenu.Menu>
      </Table.Cell>
    </Table.Row>
  );
}

export default CustomPersonRow;

CustomPersonRow.propTypes = {
  data: PropTypes.object,
  handleDelete: PropTypes.func,
};
