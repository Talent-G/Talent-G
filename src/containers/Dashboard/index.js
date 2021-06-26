import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./styles.css";
import Main_info from "../Main_info";



function Dashboard() {
  return (
    <div className="dashboard-grid">
      <Header />
      <Main_info className="Main_info" />
      <Footer />
    </div>
  );
}

export default Dashboard;
