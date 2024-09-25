import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const toggle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showalert("Dark Mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light Mode Enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          about="About Us"
          text="Text Form"
          mode={mode}
          togglemode={toggle}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route
              exact
              path="/text"
              element={
                <TextForm
                  showalert={showalert}
                  heading="Enter Text Below"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
