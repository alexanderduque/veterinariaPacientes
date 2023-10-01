import Paciente from "./Paciente"
import { useEffect } from "react"

//CREAR UN USEEFECT QUE IMPRIME EN CONSOLA NUEVO PACIENTE CADA QUE SE AGREGA UNO

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">

      {pacientes && pacientes.length ? (

        <>
          <h2 className="text-center font-black text-2xl text-white">Listado Pacientes</h2>
          <p className="text-xl mt-5 text-center mb-10 text-white font-black">
            Administra tus {""}
            <span className="text-indigo-600 font-black">Pacientes y citas</span>
          </p>

          {pacientes.map((paciente) => {

            return (
              <Paciente
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}

              />
            )


          })}

        </>

      ) : (

        <>
          <h2 className="text-center font-black text-2xl text-white">No Hay Pacientes</h2>
          <p className="text-xl mt-5 text-center mb-10 text-white font-black">
            Agrega un paciente Nuevo {""}
            <span className="text-lime-400  font-black"> <br />y aparecerá en este Apartado</span>
          </p>


        </>

      )}





    </div>



  )
}

export default ListadoPacientes
