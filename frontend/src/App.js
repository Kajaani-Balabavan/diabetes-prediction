import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import { Login } from "./Components/Auth/Login";
import { Register } from "./Components/Auth/Register";
import { CreateForm } from "./Components/Form/CreateForm";
import { DisplayData } from "./Components/Data/DisplayData";
import { auth } from "./firebase"; // Import firebase auth for sign out functionality
import "./styles/App.css";

function App() {
  const [user, setUser] = useState(null);

  const handleLogout = async () => {
    await auth.signOut();
    setUser(null);
  };

  return (
    <BrowserRouter>
      <header>
        <nav className="navbar">
          <ul>
            {user ? (
              <>
                <li>
                  <Link to="/predict">Check Diabetes</Link>
                </li>
                <li>
                  <Link to="/data">Medical History</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/predict"
          element={user ? <CreateForm user={user} /> : <Navigate to="/login" />}
        />
        <Route
          path="/data"
          element={
            user ? <DisplayData user={user} /> : <Navigate to="/login" />
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
