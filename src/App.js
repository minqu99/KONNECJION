import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./components/main/Main";
import Input from "./components/input/Input";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/Input" element={<Input />}></Route>
      </Routes>
    </div>
  );
};

export default App;
