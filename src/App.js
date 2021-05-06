import "./App.css";
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
