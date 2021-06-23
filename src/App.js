import Dashboard from "./containers/Dashboard";
import Boton from "./components/Boton";
//import React, { useState } from "react";
//import Modal from "./components/Modal";
//mport Boton from "./components/Boton";

function App() {
  // const [open, setOpen] = useState(true);

  return (
    <div>
      {/* <div>
          <Boton children="Abrir Modal" contenido="Abrir Modal" tipo="primary-button" funcion={() => setOpen(!open)}/>
          <Modal componente="Formulario" css="perfil_modal" open= {open}>
              <Boton contenido="Cancelar" tipo="secondary-button" funcion={() => setOpen(!open)}>
                  Cerrar Modal
              </Boton>
          </Modal>
      </div> */}

      <Dashboard>
        <div>
          <Boton
            tipo="primary-button"
            funcion={() => alert("Se envió el formulario via POST")}
            children={<span>Confirmar</span>}
          />
          <Boton
            tipo="secondary-button"
            funcion={() => alert("Se cerró el modal")}
            children={<span>Cerrar</span>}
          />
        </div>
      </Dashboard>
    </div>
  );
}

export default App;
