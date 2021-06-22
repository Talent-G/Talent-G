import ReactDom from "react-dom";
import React, { useState } from "react";
import "./styles.css";
import Boton from "../Boton";
import avatar from "./avatar.jpg";

export default function Formulario({ titulo }) {
  let primario = "primary-button";
  let secundario = "secondary-button";

  const [user, setUser] = useState({
    nombre: "",
    apellido: "",
    sumary: ""
  });

  const enviar = (event) =>{
    event.preventDefault();
    console.log(user);
  }
  
  const action = (event) => {
    event.preventDefault();
    setUser({
      ...user,
      [event.target.name]: event.target.value
    });
  };

  

  return (
    <div >
      <form className="form_body" onSubmit={enviar}>
        <div className="label_form">
          <div className="cabecera">
            <h1> {titulo} </h1>
            <div className="">
              <img className="foto_avatar" src={avatar} alt="logo" />
            </div>
          </div>
          <label className="label_text label"> Nombre </label>
          <br></br>
          <input
            className="label text_input"
            onChange={action}
            value={user.nombre}
            name="nombre"
            type="text"
          />{" "}
          <br></br>
          <label className=" label_text label"> Apellido</label>
          <br></br>
          <input
            className="label text_input"
            name="apellido"
            onChange={action}
            value={user.apellido}
            type="text"
          />
          <br></br>
          <label className="label"> Sumary </label>
          <br></br>
          <textarea
            className="label text_area"
            onChange={action}
            value={user.sumary}
            name="sumary"
          />
        </div>
        <Boton  children="Guardar" tipo={primario} type="submit" />
        
      </form>
    </div>
  );
}
Formulario.defaultProps = {
  open: false,
  titulo:"perfil"
};