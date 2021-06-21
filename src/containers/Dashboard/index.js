import "./styles.css";

function Dashboard({children}) {
  return(
    <div className="dashboard-grid">
      {children}
    </div>
  )
}

export default Dashboard;