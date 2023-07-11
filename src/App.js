import "./App.css";
import Login from "./components/login.js";
import Signup from "./components/Signup.js";
import Home from "./components/Home.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="*"
          element={
            <div className="logoc">
              <h1>404 ERROR</h1>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
