import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login form submitted.");
  }

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="card shadow p-4" style={{ width: "380px" }}>
        <h3 className="text-center mb-4">Admin Panel</h3>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label htmlFor="form-label">Email Address:</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="form-label">Password:</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="btn btn-primary w-100 mt-3">Login</button>
        </form>

        <p className="text-center mt-3">
          Don't have an account? <Link to="/admin/register">Register</Link>
        </p>
      </div>
    </div>
  )
}

export default Login