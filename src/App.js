import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./components/main/Main";
import Input from "./components/input/Input";
import Result from "./components/result/Result";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/Input" element={<Input />}></Route>
        <Route path="/Result-page" element={<Result />}></Route>
        {/* <Route path="/Translation" element={<Trans />}></Route> */}
      </Routes>
    </div>
  );
};

export default App;
