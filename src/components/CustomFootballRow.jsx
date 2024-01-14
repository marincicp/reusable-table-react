import Table from "../table/Table";
import PropTypes from "prop-types";
import "../style/App.css";

function CustomCell({ item, align }) {
  return (
    <td align={align}>
      <a
        className="link"
        target="_blank"
        href={`https://hr.wikipedia.org/w/index.php?search=${item}`}
      >
        {item}
      </a>
    </td>
  );
}

function PositionCell({ position }) {
  const blueBg = Number(position) < 6 ? "blueBg" : "";
  const redBg = Number(position) === 20 ? "redBg" : "";

  return (
    <td
      className={`positionCell ${blueBg} ${redBg}`}
      style={{ backgroundColor: blueBg }}
    >
      {position}.
    </td>
  );
}

function CustomFootballRow({ item }) {
  return (
    <Table.Row>
      <PositionCell position={item.position} />
      <CustomCell align="left" item={item.club} />
      <Table.Cell>{item.played_matches}</Table.Cell>
      <Table.Cell>{item.wins}</Table.Cell>
      <Table.Cell>{item.draws}</Table.Cell>
      <Table.Cell>{item.losses}</Table.Cell>
      <Table.Cell>{item.goal_difference}</Table.Cell>
      <Table.Cell>
        <strong>{item.points}</strong>
      </Table.Cell>
    </Table.Row>
  );
}

export default CustomFootballRow;

CustomFootballRow.propTypes = {
  item: PropTypes.func,
};

PositionCell.propTypes = {
  position: PropTypes.number,
};
