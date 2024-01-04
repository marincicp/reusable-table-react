import { createContext } from "react";
import "../style/table.css";
import { useContext } from "react";
import PropTypes from "prop-types";
import { isEmpty, map } from "lodash-es";

const TableContext = createContext();

function Header({ children }) {
  const { header } = useContext(TableContext);

  if (!isEmpty(header)) {
    const headerTitles = header.split(" ");

    return (
      <thead>
        <Row>
          {map(headerTitles, (title) => (
            <th key={title}>{title}</th>
          ))}
        </Row>
      </thead>
    );
  }

  return (
    <thead>
      <Row header>{children}</Row>
    </thead>
  );
}

function Row({ children, header }) {
  const { columns } = useContext(TableContext);

  return (
    <tr
      className={`common-row row ${header ? "header" : ""}`}
      style={{ gridTemplateColumns: columns }}
    >
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
  console.log(!!render, "render");
  if (isEmpty(data) && !render) return <Empty>No data !</Empty>;

  const allKeys = Object.keys(data[0]);

  return (
    <tbody className="body" style={{ gridTemplateColumns: columns }}>
      {!!render
        ? map(data, render)
        : data.map((item, i) => (
            <Row key={i}>
              {map(allKeys, (key, index) => (
                <Cell key={index}>{item[key]}</Cell>
              ))}
            </Row>
          ))}
    </tbody>
  );
}

function Cell({ children, align }) {
  return <td align={align}> {children}</td>;
}

function Table({ columns, children, header }) {
  return (
    <TableContext.Provider value={{ columns, header }}>
      <table className="table">{children}</table>
    </TableContext.Provider>
  );
}

Table.Header = Header;
Table.Row = Row;
Table.Cell = Cell;
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
  header: PropTypes.bool,
};

Header.propTypes = {
  children: PropTypes.array,
  header: PropTypes.string,
};

Cell.defaultProps = {
  align: "center",
};
