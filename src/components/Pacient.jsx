// rfce
function Pacient() {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className=" font-bold mb-3 text-gray-700">Nombre: {''}
          <span className="font-normal normal-case">Hook</span>
        </p>

        <p className=" font-bold mb-3 text-gray-700">Propietario: {''}
          <span className="font-normal normal-case">Kevin</span>
        </p>

        <p className=" font-bold mb-3 text-gray-700">E-mail: {''}
          <span className="font-normal normal-case">correo@correo.com</span>
        </p>

        <p className=" font-bold mb-3 text-gray-700">Fecha de alta: {''}
          <span className="font-normal normal-case">3 de Enero 2023</span>
        </p>

        <p className=" font-bold mb-3 text-gray-700">Sintomas: {''}
          <span className="font-normal normal-case">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum suscipit scelerisque. 
          Quisque aliquet leo non viverra volutpat. Nam aliquam viverra tristique. 
          Nulla vestibulum magna a posuere porttitor. 
          Morbi imperdiet sit amet lacus ut varius. Pellentesque et pharetra odio.
          </span>
        </p>
      </div>
  )
}

export default Pacient