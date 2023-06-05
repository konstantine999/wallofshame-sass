import React from "react";
import "./table.scss";
import ButtonTable from "./ButtonTable";

function Table(props) {
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Excuse</th>
        <th>Count</th>
      </tr>
      {props.users.map((user) => (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.excuse}</td>
          <td>{user.count}</td>
          <ButtonTable />
        </tr>
      ))}
    </table>
  );
}

export default Table;
