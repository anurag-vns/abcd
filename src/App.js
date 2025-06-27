import { Routes, Route, Link, Outlet } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Registration from "./pages/Registration";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="./">Home</Link>
          </li>

          <li>
            <Link to="/registration">Registration</Link>
          </li>

          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <Outlet/>

      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/registration" element={<Registration />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
      </Routes>
    </>

  );
}

export default App;

