import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from "../pages/admin/Admin";
import Login from "../pages/login/Login";
function App() {
  return (
      <Router>
        <Routes>
          <Route path="/Admin" element={<Admin />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
  );
}

export default App;
