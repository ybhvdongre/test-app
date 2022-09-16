import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ShowData.css";

function ShowData() {
  const [data, setData] = useState([]);

  fetch("http://localhost:8080/get-empDetail")
    .then((res) => res.json())
    .then((data) => {
      setData(data);
      console.log(data);
    });

  return (
    <>
      <Link to="/">
        <button id='addDatabtn'>Add Data</button>
      </Link>
      <div className="employee__data">
        <h1>Employee Data</h1>
        <table border="1px">
          <thead>
            <th>ID</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Contact</th>
            <th>Email Address</th>
          </thead>
          <tbody>
            {data.length > 0 &&
              data.map((val, id) => (
                <tr key={val.id}>
                  <td>{val.id}</td>
                  <td>{val.name}</td>
                  <td>{val.designation}</td>
                  <td>{val.contact}</td>
                  <td>{val.email}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ShowData;
