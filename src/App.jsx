import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from "./components/pages/DashboardPage";
import LoginPage from "./components/pages/LoginPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<DashboardPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
