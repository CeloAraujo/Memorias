import { useState } from "react";
import "./App.css";

import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <div className="container">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
