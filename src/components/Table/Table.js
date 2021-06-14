import React from "react";
import './Table.css'

function Table(props) {
  const {
    headers,
    filteredData,
    ...moreProps
  } = props;
  const tableData = filteredData;

  function renderRowData() {
    const rowData = tableData?.map(row => {
      return (
        <tr >
          <td>{row.id}</td>
          <td>
            <img src={`${row.thumbnail.path}.${row.thumbnail.extension}`} alt={row.name}/>
          </td>
          <td>{row.name}</td>
          <td>{row.description}</td>
        </tr>
      )
    })
    return rowData;
  }

  function renderRowHeaders() {
    const rowHeaders = headers.map(header => {
      return (
        <th key={header}>{header}</th>
      )
    });

    return (
      <tr>
        {rowHeaders}
      </tr>
    );
  }

  function renderContent() {
    if (tableData.length < 1) {
      return (
        <h3>No results found</h3>
      )
    } else {
      return (
        <div className="table-container">
          <table>
            <tbody>
              {renderRowHeaders()}
              {renderRowData()}
            </tbody>
          </table>
        </div>
      );
    }
  }

  return (
    <>
      {renderContent()}
    </>
  );
}

export default Table;
