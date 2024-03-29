import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./componenets/Home";
import About from "./componenets/About";
import Navbar from "./componenets/Navbar";
import NoteState from "./context/notes/NoteState";
import Alert from "./componenets/Alert";
import Login from "./componenets/Login";
import Signup from "./componenets/Signup";

function App() {
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    setAlert("This is Alert1");

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }, []);
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login/>} />
              <Route path="/signup" element={<Signup/>} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
