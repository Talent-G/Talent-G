import "./styles.css";

export default function ListStudents ({titulo, list_name})  {
    const list_name_studets = list_name.map( (name) => <li><a href="#">{name}</a></li>)
    return (
        <div className="ListStudents">
            <h2> { titulo }</h2>
                <h3>Alumnos</h3>
                <ul>
                    {list_name_studets}
                </ul>
        </div>
    )
}

ListStudents.defaultProps={
    list_name : ['Alejandra G moreno', 'Alex Camacho', 'Victor Cruz']
};