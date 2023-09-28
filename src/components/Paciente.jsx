const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

    const {nombre, propietario, email, alta, sintomas, id } = paciente

    const handleEliminar = ()=>{
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: '¿Deseas Eliminar El paciente?',
            text: "No podras Revertir Este Cambio!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'si,Eliminalo!',
            cancelButtonText: 'No, cancelar<------->',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire(
                'Eliminado!',
                'Tu paciente Fue Eliminado',
                'success',
                eliminarPaciente(id)
                
              )
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Accion Cancelada',
                'Tu paciente esta a salvo :)',
                'error'
              )
            }
          })
       
    }

  return (
    <div className="mx-5 my-10 bg-white rounded-xl shadow-md px-5 py-10">
    <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {""}
        <span className="font-normal normal-case">{nombre}</span>

    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {""}
        <span className="font-normal normal-case">{propietario}</span>

    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">Email: {""}
        <span className="font-normal normal-case">{email}</span>

    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de Alta: {""}
        <span className="font-normal normal-case">{alta}</span>

    </p>

    <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {""}
        <span className="font-normal normal-case">{sintomas}</span>

    </p>

    <div className="flex justify-around mt-10">
    <button
    type="button" 
    className="py-2 px-10 bg-indigo-600 hover:bg-green-600
     text-white font-bold uppercase rounded-lg" 
    onClick={ () => setPaciente(paciente)}
     >Editar</button>

    <button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-700
     text-white font-bold uppercase rounded-lg"
     onClick={handleEliminar}
     >Eliminar</button>

    </div>

</div>
  )
}

export default Paciente
