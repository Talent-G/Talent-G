import ReactDom from "react-dom";
import React, { useState } from "react";
import "./styles.css";
import Boton from "../Boton";
import Formulario from "../Formulario";


export default function Modal({ componente, children ,css, open, funcion }) {
  //const [abierto, setAbierto] = useState(true);
 

    if (!open) return null;
    return ReactDom.createPortal(
      <div className={css}>
        {componente === "Formulario" ? (
          <div>
            <Formulario titulo={componente} />
            {children}           
          </div>
        ) : (
          <p> No le llego ningun componente al modal </p>
        )}
      </div>,
      document.getElementById("portal")
    );
  }
  
  Modal.defaultProps = {
    open: false,
    css: "perfil_modal",
    componente:"-",
    
  };