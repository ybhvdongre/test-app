import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "./AddData.css";

function AddData() {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [contact, setContact] = useState(0);
  const [email, setEmail] = useState("");

  const addEmpData = () => {
    Axios.post("http://localhost:8080/add-empDetail", {
      id,
      name,
      designation,
      contact,
      email,
    });
  };

  return (
    <>
      <div className="employee__form">
        <h1>Employee Details</h1>
        <input
          type="number"
          onChange={(e) => {
            setId(e.target.value);
          }}
          placeholder="Employee ID"
        />
        <input
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Employee Name"
        />
        <input
          type="text"
          onChange={(e) => {
            setDesignation(e.target.value);
          }}
          placeholder="Employee Designation"
        />
        <input
          type="phone"
          onChange={(e) => {
            setContact(e.target.value);
          }}
          placeholder="Employee Contact"
        />
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Employee Email address"
        />
        <button onClick={addEmpData}>Submit</button>
      </div>
      <Link to="/showData">
        <button id="showDatabtn">Show Data</button>
      </Link>
    </>
  );
}

export default AddData;
