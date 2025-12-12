import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <div
      className="d-flex flex-column text-white"
      style={{
        width: "240px",
        height: "100vh",
        backgroundColor: "#0a1a2a",
        position: "fixed",
        left: 0,
        top: 0,
        color: "white",
        paddingTop: "20px",
      }}
    >
      {/* Brand Header  */}
      <h4 className="px-3 mb-4">Admin Panel</h4>

      {/* Menu Items */}
      <div className="px-3">

        <Link
          to="/admin/dashboard"
          className={`sidebar-link ${isActive("/admin/dashboard") ? "active" : ""}`}
        >
          <i className="bi bi-speedometer2"></i> Dashboard
        </Link>

        <Link
          to="#"
          className="sidebar-link"
        >
          <i className="bi bi-cart"></i> Orders
        </Link>

        <Link
          to="#"
          className="sidebar-link"
        >
          <i className="bi bi-box-seam"></i> Products
        </Link>

        <Link
          to="#"
          className="sidebar-link"
        >
          <i className="bi bi-people"></i> Customers
        </Link>

        <Link
          to="#"
          className="sidebar-link"
        >
          <i className="bi bi-chat-dots"></i> Messages
        </Link>

        {/* Dropdown Toggle */}
        <div
          className="sidebar-link"
          style={{ cursor: "pointer" }}
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <i className="bi bi-folder"></i> Examples
          <i
            className={`bi ms-auto ${dropdownOpen ? "bi-chevron-down" : "bi-chevron-right"
              }`}
          ></i>
        </div>

        {/* Animated Dropdown Container */}
        <div className={`sidebar-dropdown ${dropdownOpen ? "open" : ""}`}>
          <div className="sidebar-submenu">
            <Link to="#" className="sidebar-link">Auth</Link>
            <Link to="#" className="sidebar-link">Documentation</Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SideBar