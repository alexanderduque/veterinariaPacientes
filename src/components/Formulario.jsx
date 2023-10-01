import { useState, useEffect } from "react"
import Error from "./Error";
import Paciente from "./Paciente";

//REPASAR PARTE DE ERROR
//REPASAR PARTE DE FUNCION E
//REPASAR ARROS FUNTION
//REPASAR ULTIMAS 3 CLASES PARA ENTENDERLAS AL 100
// REPASAR CLASE 85 DE COLOCAR LOS STATE EN EL FORMULARIO AL PRESIONAR EDITAR
// REPASAR CLASE 87
//REPASAR CLASE BOTON ELIMINAR

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {

  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [alta, setAlta] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false)

  useEffect(() => {

    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setAlta(paciente.alta)
      setSintomas(paciente.sintomas)
    }

  }, [paciente])

  //GENERANDO ID DE CADA LISTA DE PACIENTES
  const generarId = () => {

    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36)

    return random + fecha;
  }

  // GENERANDO FUNCION DE COMPROBACION SI TODO ESTA COMPLETADO
  // GENERANDO REINICIO DE FORMULARIO LUEGO DE LLENADO
  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombre, propietario, email, alta, sintomas].includes("")) {
      console.log("Algun campo esta sin llenar")

      setError(true)
      return;
    }
    setError(false);
    //CONSTRUYENDO EL OBJETO PACIENTES

    const objetoPacientes = {
      nombre,
      propietario,
      email,
      alta,
      sintomas,

    }

    if (paciente.id) {
      //EDITANDO EL REGISTRO

      objetoPacientes.id = paciente.id

      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id
        ? objetoPacientes : pacienteState)

      setPacientes(pacientesActualizados)

      setPaciente({})

    } else {
      //NUEVO REGISTRO DE PACIENTE

      objetoPacientes.id = generarId();
      setPacientes([...pacientes, objetoPacientes])
    }



    //REINICIAR FORMULARIO
    setNombre("")
    setPropietario("")
    setEmail("")
    setAlta("")
    setSintomas("")
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-2xl text-center text-white "> Lista De Pacientes </h2>

      <p className="text-xl mt-5 text-center mb-10 text-white font-black">Añade pacientes y {""}

        <span className="text-lime-400  font-black">Administralos</span>
      </p>

      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10" onSubmit={handleSubmit}>

        {error && <Error>

          <p>Todos los campos son obligatorios</p>

        </Error>}

        <div className="mb-5">
          <label htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>

          <input
            id="mascota"
            type="text"
            placeholder="Nombre De Tu Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}

          />
        </div>

        <div className="mb-5">
          <label htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>

          <input
            id="propietario"
            type="text"
            placeholder="Nombre Del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email"
            className="block text-gray-700 uppercase font-bold">Email</label>

          <input
            id="email"
            type="email"
            placeholder="Email Del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="alta"
            className="block text-gray-700 uppercase font-bold">Fecha De Alta</label>

          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={alta}
            onChange={(e) => setAlta(e.target.value)}
          />
        </div>

        <div>

          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}

          />

        </div>

        <div>

          <input
            type="submit"
            value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold
       hover:bg-green-600 cursor-pointer transition-all"

          />

        </div>


      </form>

    </div>
  )
}

export default Formulario
