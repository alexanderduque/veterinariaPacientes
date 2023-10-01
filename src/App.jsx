import { useState } from "react"
import React, { useEffect } from 'react';
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"
import "./index.css"



function App() {

  useEffect(() => {
    const iframe = document.getElementById('video-iframe');

    // Función para reproducir el video cuando la página se carga
    const playVideo = () => {
      if (iframe) {
        iframe.src += '&autoplay=1'; // Agrega el parámetro 'autoplay=1' a la URL del iframe para iniciar la reproducción automática
      }
    };

    // Escucha el evento 'load' del iframe y llama a la función para reproducir el video
    if (iframe) {
      iframe.addEventListener('load', playVideo);
    }

    return () => {
      // Limpia el evento cuando el componente se desmonta
      if (iframe) {
        iframe.removeEventListener('load', playVideo);
      }
    };
  }, []);
  
const [pacientes, setPacientes] =useState([]);

const[paciente, setPaciente] = useState({}); //FUNCION

const eliminarPaciente = (id) => {

  const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
  setPacientes(pacientesActualizados)
}



  return (
<div className="video-background">
      <iframe
        id="video-iframe"
        title="Video Embebido"
        src="https://mega.nz/embed/pmUxkaBA#t9N_qn0YCeETOb1XOkhbPWVpPpRxTCc4ea8dvH_Rrww!1a1m" 
        allowfullscreen allow="autoplay;"
        frameborder="0"
      ></iframe>
      {/* Contenido adicional */}

<Header

/> {/*EN JSX SE CIERRA ASI LAS ETIQUETAS SIN CIERRE /> */}

<div className="mt-10 md:flex">
<Formulario
  pacientes= {pacientes}
  setPacientes= {setPacientes}
  paciente = {paciente}
  setPaciente = {setPaciente}
/>
<ListadoPacientes
  pacientes= {pacientes}
  setPaciente= {setPaciente}
  eliminarPaciente = {eliminarPaciente}
/>
</div>

</div>
  )
}

export default App
