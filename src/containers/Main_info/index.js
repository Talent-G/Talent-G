import "./styles.css";

export default function Main_info ({children, title,content,resources}){
    const list_tasks = content.list_tasks.map((task) => <li> {task}</li>)
    const list_resources =  resources.map((recurso) => <li> {recurso} </li>)

    return(
        <div className="main__info">
            <div className="main__mauricio">
                <h1 className="main__titulo">{title}</h1>
                <div className="main__contenido">
                      {content.caption} 
                      <ol>
                          {list_tasks}
                      </ol>
                </div>
                <div className="main__recursos">
                     Recursos: 
                    <ul>
                        {list_resources}
                    </ul>
                </div>
            </div>
            <div className="main__arturo">
                
            </div> 
            
        </div>
    )
}

Main_info.defaultProps={
    title: "Titulo Dafult",
    content: {
        caption:"Subitutlo dafault",
        list_tasks:["No hay Tareas","No hay Tareas"]
    },
    resources: ["No hay recursos por mostrar","No hay recursos para mostrar"]
}