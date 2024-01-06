// rfce
function Pacient({pacient, setPacient}) {

  const {petName, ownerName, email, date, description} = pacient

  return (
    <div className="mx-5 bg-white shadow-md px-5 py-10 rounded-xl mb-3">
        <p className=" font-bold mb-3 text-gray-700">Nombre: {''}
          <span className="font-normal normal-case">{petName}</span>
        </p>

        <p className=" font-bold mb-3 text-gray-700">Propietario: {''}
          <span className="font-normal normal-case">{ownerName}</span>
        </p>

        <p className=" font-bold mb-3 text-gray-700">E-mail: {''}
          <span className="font-normal normal-case">{email}</span>
        </p>

        <p className=" font-bold mb-3 text-gray-700">Fecha de alta: {''}
          <span className="font-normal normal-case">{date}</span>
        </p>

        <p className=" font-bold mb-3 text-gray-700">Sintomas: {''}
          <span className="font-normal normal-case">
          {description}
          </span>
        </p>

        <div className="flex justify-between mt-5">
          <button
            type="button"
            onClick={() => setPacient(pacient)}
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold
            uppercase rounded-lg"
          > Editar </button>

          <button
            type="button"
            className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold
            uppercase rounded-lg"
          > Eliminar </button>
        </div>
      </div>
  )
}

export default Pacient