import React, { useState } from "react";
import Menu from "./components/Menu";
import MainPage from "./components/MainPage";
import RightSidebar from "./components/RightSidebar";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Menu />
      <MainPage />
      <RightSidebar />
    </div>
  );
}
