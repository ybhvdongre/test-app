import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddData from "./Component/AddData";
import ShowData from "./Component/ShowData";

function App() {
  return (
    <div className="employee">
      <Routes>
        <Route path="/" element={<AddData />} />
        <Route path="/showdata" element={<ShowData />} />
      </Routes>
    </div>
  );
}

export default App;
