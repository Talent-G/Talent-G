//import ReactDom from "react-dom";
import "./styles.css"

export default function Boton({children, tipo, funcion, }) {  
  return (
    <div>
      <button className={tipo} onClick={funcion}>
        {children}
      </button>
    </div>
  );
}


Boton.defaultProps = {
  funcion: () => {
    console.log("Dato default en button");
  }
};
