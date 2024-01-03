import Pacient from "./Pacient"

function PacientsList() {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
    
      <p className="text-lg mt-5 text-center font-black mb-5">
        Adminisitra tus {''}
        <span className="text-indigo-600 font-bold">
          Pacientes y citas
        </span>
      </p>

      <Pacient />
      <Pacient />
      <Pacient />
      <Pacient />
    </div>
  )
}

export default PacientsList