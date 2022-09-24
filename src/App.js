import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./routes/auth/Auth";
import Login from "./routes/login/Login";

function App() {
  return (
    <div className="app">
      <div className="link_container">
        <NavLink
          className={(route) =>
            route.isActive ? "nav_link nav_link--active" : "nav_link"
          }
          to="/register"
        >
          {" "}
          Register{" "}
        </NavLink>
        <NavLink
          className={(route) =>
            route.isActive ? "nav_link nav_link--active" : "nav_link"
          }
          to="/login"
        >
          {" "}
          Login{" "}
        </NavLink>
      </div>
      <Routes>
        <Route path="/register" element={<Auth />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
