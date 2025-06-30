import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page1/Home";
import Login from "./page1/Login";
import Dashboard from "./page1/Dashboard";
import ProtectedRoute from "./page1/ProtectedRoute";

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
        } />
      </Routes>
      
    </Router>

  );
}
export default App;