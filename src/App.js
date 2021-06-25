import Dashboard from "./containers/Dashboard";
import React, { useState } from "react";
// import Modal from "./components/Modal";
// import Boton from "./components/Boton";

function App() {
  //  const [open, setOpen] = useState(true);
  
  return (
    <div>
      {/* <div>
          <Boton children="Abrir Modal" contenido="Abrir Modal" tipo="primary-button" funcion={() => setOpen(!open)}/>
          <Modal componente="Formulario" css="perfil_modal" open= {open}>
              <Boton contenido="Cancelar" tipo="secondary-button" funcion={() => setOpen(!open)}>
                  Cerrar Modal
              </Boton>
          </Modal>
      </div>  */}

      <Dashboard />
    </div>
  );
}

export default App;
