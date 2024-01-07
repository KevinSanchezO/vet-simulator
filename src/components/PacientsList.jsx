import Pacient from "./Pacient"

function PacientsList({pacients, setPacient, deletePacient}) {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacients && pacients.length ? 
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
    
          <p className="text-lg mt-5 text-center font-black mb-5">
            Adminisitra tus {''}
            <span className="text-indigo-600 font-bold">
              Pacientes y citas
            </span>
          </p>

          { pacients.map( (pacient) => {
            return(
              <Pacient 
                key={pacient.id}
                pacient={pacient}
                setPacient={setPacient}
                deletePacient={deletePacient}
              />
            )
          })}
        </>
        :
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
    
          <p className="text-lg mt-5 text-center font-black mb-5">
            Comienza a agregar pacientes {''}
            <span className="text-indigo-600 font-bold">
              y apareceran en este espacio
            </span>
          </p>
        </>
      }
    </div>
  )
}

export default PacientsList