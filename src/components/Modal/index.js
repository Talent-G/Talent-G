import ReactDom from "react-dom";
import React, { useState } from "react";
import "./styles.css";
import Boton from "../Boton";
import Formulario from "../Formulario";
import ListStudents from "../ListStudents";


export default function Modal({ componente, children ,css, open,}) {
  //const [abierto, setAbierto] = useState(true);
 

    if (!open) return null;
    return ReactDom.createPortal(
      <div className={css}>
        {componente === "Formulario" ? (
          <div>
            <Formulario titulo="Perfil" />
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
    css: "perfil_modal",
    componente:"-",
    
  };