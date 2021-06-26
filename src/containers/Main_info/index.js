import "./styles.css";

export default function Main_info({ children, title, content, resources }) {
  const list_tasks = content.list_tasks.map((task) => <li> {task}</li>);
  const list_resources = resources.map((recurso) => (
    <li>
      <a href="todo:replaceRoute"> {recurso} </a>
    </li>
  ));

  return (
    <div className="main__info">
      <div className="main__card">
        <div className="main__left">
          <div className="text__container">
            <h1 className="main__title">{title}</h1>
            <div className="main_content">
              {content.caption}
              <ol className="main__classes">{list_tasks}</ol>
            </div>
            <div className="main__resources">
              <span className="text-bold">Recursos:</span>
              <ul className="main__resources__list">{list_resources}</ul>
            </div>
          </div>
        </div>
        <div className="main__right">
          <div className="image__container">
            <img className="main__image" src={content.image} alt={title} />
            <figcaption className="main__trainer">
              <span className="text-bold">Trainer:</span>{" "}
              <span className="text-primary">{content.trainer}</span>
            </figcaption>
          </div>
        </div>
      </div>
    </div>
  );
}

Main_info.defaultProps = {
  title: "Día 1 - CSS",
  content: {
    caption: "Aprenderemos los conceptos core sobre css:",
    list_tasks: [
      "Qué es el CCSOM y su importancia",
      "Qué son los selectores y la especificidad.",
      "Cómo declarar los estilos en una hoja de estilos",
      "Propiedades para realizar layouting",
      "Flexbox",
      "Grid Css",
    ],
    image: "https://i.imgur.com/7QonOiu.png",
    trainer: "Juan Crisóstomo",
  },
  resources: ["What is flex?", "Understanding Grid layout", "Css selectors"],
};
