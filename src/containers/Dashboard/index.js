import "./styles.css";
import Information from '../../components/Feedback'
import StudentList from '../../components/StudentList'

function Dashboard({title, items}) {
  return(
    <>
    <Information />
    <StudentList />
    </>
  )

}


export default Dashboard;