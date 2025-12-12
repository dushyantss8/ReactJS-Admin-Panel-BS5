import { useState } from "react";

const TopBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div
      className="d-flex justify-content-between align-items-center shadow-sm pe-4 ps-3"
      style={{
        height: "60px",
        left: "240px",         // IMPORTANT
        backgroundColor: "#ffffff",
        position: "fixed",
        top: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      {/* Left Section (Page Title) */}
      <h5 className="m-0 fw-semibold">Dashboard</h5>

      {/* Right Section (Profile Dropdown) */}
      <div className="position-relative">

        <div
          className="d-flex align-items-center gap-2 topbar-profile"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <img src="https://i.pravatar.cc/100" alt="user" />
          <span className="fw-medium">Admin</span>
          <i className={`bi ${dropdownOpen ? "bi-chevron-up" : "bi-chevron-down"}`}></i>
        </div>

        {/* Dropdown */}
        <div className={`topbar-dropdown ${dropdownOpen ? "open" : ""}`}>
          <div className="topbar-dropdown-item">
            <i className="bi bi-person"></i>
            My Profile
          </div>

          <div className="topbar-dropdown-item">
            <i className="bi bi-gear"></i>
            Settings
          </div>

          <div className="topbar-dropdown-item text-danger">
            <i className="bi bi-box-arrow-right"></i>
            Logout
          </div>
        </div>

      </div>
    </div>
  )
}

export default TopBar