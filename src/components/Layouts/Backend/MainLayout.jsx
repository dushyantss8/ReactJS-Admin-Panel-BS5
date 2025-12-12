import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

const MainLayout = () => {
  return (
    <div>
      {/* Sidebar  */}
      <SideBar />

      {/* TopBar */}
      <TopBar />

      {/* Main Content */}
      <div style={{ marginLeft: "240px", marginTop: "60px", padding: "20px" }}>
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout