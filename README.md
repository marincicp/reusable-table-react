# Reusable Table React


The Table Generator is designed with the React Compound Component and Render Props patterns, 
enabling a quick and easy implementation of tables with additional customization options such as sorting and an action menu.


**Basic Table Example**

      <Table columns="50px 50px 50px 80px">
        <Table.Header header="Column1 Column2 Column3 Column4" />
        <Table.Body data={data} />
      </Table>


**Custom Table Example**

      <ActionMenu>
        <Table columns="5rem minmax(min-content, 1fr) repeat(4,minmax(min-content, .5fr)) 7rem 5rem">
          <Table.Header>
            <th>#</th>
            <Table.SortableHeaderCell
              active={filter === filters.clubName}
              onClick={() => handleChangeFilter(filters.clubName)}
            >
              Club
            </Table.SortableHeaderCell>
            <th>PM</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>GD</th>
            <Table.SortableHeaderCell
              active={filter === filters.points}
              onClick={() => handleChangeFilter(filters.points)}
            >
              Points
            </Table.SortableHeaderCell>
          </Table.Header>

          <Table.Body
            data={tableData}
            render={(item) => <CustomFootballRow key={item.club} item={item} />}
          ></Table.Body>
        </Table>
      </ActionMenu>


![image](https://github.com/marincicp/reusable-table-react/assets/109846068/3dbe50a1-ee69-40fc-bd52-4222ce9aeacb)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
