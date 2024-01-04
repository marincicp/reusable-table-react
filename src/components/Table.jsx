import { createContext } from "react";
import "../style/table.css";
import { useContext } from "react";
import PropTypes from "prop-types";
import { isEmpty, map } from "lodash-es";

const TableContext = createContext();

function Header({ children }) {
  const { columns, header } = useContext(TableContext);

  if (!isEmpty(header)) {
    const headerTitles = header.split(" ");

    return (
      <thead>
        <Row className="common-row" style={{ gridTemplateColumns: columns }}>
          {map(headerTitles, (title) => (
            <th key={title}>{title}</th>
          ))}
        </Row>
      </thead>
    );
  }

  return (
    <thead>
      <Row
        className="common-row header"
        style={{ gridTemplateColumns: columns }}
      >
        {children}
      </Row>
    </thead>
  );
}

function Row({ children }) {
  const { columns } = useContext(TableContext);

  return (
    <tr className="common-row row" style={{ gridTemplateColumns: columns }}>
      {children}
    </tr>
  );
}

function Empty({ children }) {
  return (
    <tbody className="empty">
      <p> {children} </p>
    </tbody>
  );
}

function Body({ data, render }) {
  const { columns } = useContext(TableContext);

  if (isEmpty(data)) return <Empty>No data !</Empty>;

  // console.log(, "data");

  const allKeys = Object.keys(data[0]);

  return (
    <tbody className="body" style={{ gridTemplateColumns: columns }}>
      {render
        ? map(render)
        : data.map((item, i) => (
            <Row key={i}>
              {map(allKeys, (key, index) => (
                <td key={index}>{item[key]}</td>
              ))}
            </Row>
          ))}
    </tbody>
  );
}

function Table({ columns, children, header }) {
  return (
    <TableContext.Provider value={{ columns, header }}>
      <table className="table">{children}</table>
    </TableContext.Provider>
  );
}

{
  /* <td>{item.position}</td>
<td>{item.club}</td>
<td>{item.price}</td>
<td>{item.capacity}</td>
<td>{item.discount}</td> */
}

Table.Header = Header;
Table.Row = Row;
Table.Body = Body;

export default Table;

Table.propTypes = {
  columns: PropTypes.string,
  children: PropTypes.array,
  header: PropTypes.string,
};

Body.propTypes = {
  data: PropTypes.array,
  render: PropTypes.func,
};

Empty.propTypes = {
  children: PropTypes.array,
};

Row.propTypes = {
  children: PropTypes.array,
};

Header.propTypes = {
  children: PropTypes.array,
  header: PropTypes.string,
};
