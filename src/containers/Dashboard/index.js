import "./styles.css";
import Information from '../../components/Feedback'
import StudentList from '../../components/StudentList'
import AsideButton from "../../components/AsideButton";

function Dashboard({title, items}) {
  return(
    <>
    <Information />
    <StudentList />

    <AsideButton ></AsideButton>
    <AsideButton lbl='Editar Perfil' action="/"></AsideButton>
    <AsideButton lbl='Ver Agenda' action="/"></AsideButton>
    <AsideButton lbl='Enviar Feedback' action="/"></AsideButton>
    </>
  )

}


export default Dashboard;