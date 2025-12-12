import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

/** Auth Pages */
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

/** Dashboard Components * Pages */
import Dashboard from "./pages/Dashboard/Dashboard";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root / to /admin */}
        <Route path="/" element={<Navigate to={"/admin"} replace />} />

        {/* Auth Routes  */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/register" element={<Register />} />

        <Route path="/admin">
          {/* Dashboard Routes (will be protected later) */}
          <Route index path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App