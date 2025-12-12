import { useState } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div
      className="d-flex flex-column text-white"
      style={{
        width: "250px",
        height: "100vh",
        backgroundColor: "#0a1a2a",
        position: "fixed",
        left: 0,
        top: 0,
        paddingTop: "20px"
      }}
    >
      <h4 className="text-center mb-4">Admin Panel</h4>

      <ul className="nav flex-column px-3">
        <li className="nav-item mb-2">
          <Link to="/admin" className="nav-link text-white">
            Dashboard
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link to="/admin/todos" className="nav-link text-white">
            Todo List
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link to="#" className="nav-link text-white">
            Settings
          </Link>
        </li>

        {/* Dropdown Menu */}
        <li className="nav-item mb-2">
          <div
            className="nav-link text-white d-flex justify-content-between align-items-center"
            style={{ cursor: "pointer" }}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            More Options
            <span>{dropdownOpen ? "▾" : "▸"}</span>
          </div>

          {dropdownOpen && (
            <ul className="nav flex-column ms-3 mt-2">
              <li className="nav-item mb-1">
                <Link to="#" className="nav-link text-white">
                  Sub Option 1
                </Link>
              </li>
              <li className="nav-item mb-1">
                <Link to="#" className="nav-link text-white">
                  Sub Option 2
                </Link>
              </li>
              <li className="nav-item mb-1">
                <Link to="#" className="nav-link text-white">
                  Sub Option 3
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  )
}

export default SideBar