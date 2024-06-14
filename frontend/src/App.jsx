import { useState } from "react";
import "./App.css";

import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";

import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />
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
