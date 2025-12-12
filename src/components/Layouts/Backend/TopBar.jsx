

const TopBar = () => {
  return (
    <div
      className="d-flex justify-content-between align-items-center shadow-sm px-4"
      style={{
        height: "60px",
        marginLeft: "250px",
        backgroundColor: "#ffffff",
        position: "fixed",
        top: 0,
        right: 0,
        left: "250px",
        zIndex: 1000,
      }}
    >
      <h5 className="m-0">Dashboard</h5>

      <div className="d-flex align-items-center">
        <span className="me-3">Welcome Admin</span>
        <button className="btn btn-outline-danger btn-sm">Logout</button>
      </div>
    </div>
  )
}

export default TopBar