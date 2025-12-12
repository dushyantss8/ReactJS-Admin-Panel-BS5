import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register Form Submitted.");
  }

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="card shadow p-4" style={{ width: "380px" }}>
        <h3 className="text-center mb-4">Registration</h3>

        <form onSubmit={handleSubmit}>
          {/* Name of User */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* Email of User */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address: </label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Password: </label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="confirm-password" className="form-label">Confirm Password: </label>
            <input
              type="confirm-password"
              className="form-control"
              name="confirm-password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <button className="btn btn-success w-100 mt-3">Create Account</button>
        </form>

        <p className="text-center mt-3">
          Already registered? <Link to="/admin">Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Register