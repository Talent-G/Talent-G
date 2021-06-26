import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./styles.css";
import Main_info from "../Main_info";

//   const title="Dia 1 - CSS"

//   const content={
//     caption:"Apremderemos los conceptos core sobre css: ",
//     list_tasks:["Que es el CSOM y su importancia",
//     "Que son los selectores y la especialidad",
//     "Como declarar estilos en una hoja de estilos",
//     " Propiedad para realizar layout",
//     "Flexbox",
//     "Grid css"],
//   }

//   const resources=["What is Flex",
//       "Undestanding Grid Layout",
//       "Css selectors"
// ];

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
