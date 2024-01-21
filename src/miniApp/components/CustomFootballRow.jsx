import PropTypes from "prop-types";
import Table from "../../components/table/Table";
import { cellBackground } from "../constants/footballTableConstants";
import "../style/App.css";

function CustomCell({ item, align }) {
  return (
    <td align={align}>
      <a
        rel="noreferrer"
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
  const blueBg = Number(position) === 5 ? cellBackground.blue : "";
  const redBg = Number(position) === 20 ? cellBackground.red : "";
  const greenBg = Number(position) < 5 ? cellBackground.green : "";

  return (
    <td
      className={`positionCell ${blueBg} ${redBg} ${greenBg}`}
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
      <Table.Cell bold>{item.points}</Table.Cell>
    </Table.Row>
  );
}

export default CustomFootballRow;

CustomFootballRow.propTypes = {
  item: PropTypes.object,
};

PositionCell.propTypes = {
  position: PropTypes.number,
};

CustomCell.propTypes = {
  item: PropTypes.string,
  align: PropTypes.string,
};
