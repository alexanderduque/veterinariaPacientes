import { useState } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"
import "./index.css"



function App() {
  
const [pacientes, setPacientes] =useState([]);

const[paciente, setPaciente] = useState({}); //FUNCION

const eliminarPaciente = (id) => {

  const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
  setPacientes(pacientesActualizados)
}



  return (
<div className="video-background">
<video autoPlay muted loop id="myVideo">
        <source src="https://mega.nz/file/pmUxkaBA#t9N_qn0YCeETOb1XOkhbPWVpPpRxTCc4ea8dvH_Rrww" type="video/mp4" />
       
      </video>
      <div className="content">
        {/* Contenido de tu página */}
      </div>

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
