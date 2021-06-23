//import ReactDom from "react-dom";
import "./styles.css";
export default function Boton({ children, tipo, funcion }) {
  let className = "button";
  if (tipo) {
    className = `${className} ${tipo}`;
  }

  return (
    <div>
      <button className={className} onClick={funcion}>
        {children}
      </button>
    </div>
  );
}

Boton.defaultProps = {
  funcion: () => {
    console.log("Dato default en button");
  },
};
