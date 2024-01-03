// rfce
import {useState} from 'react'

function Form() {
  const [petName, setPetName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
  
    //validations
    if ([petName, ownerName, email, date, description].includes('')) {
      setError(true);
      return;
    }
    
    setError(false);
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5 ">
      <h2 className="font-black text-3xl text-center">
        Seguimiento Pacientes
      </h2>

      <p className="text-lg mt-5 text-center font-black mb-5">
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5"
      >

        {error && (
          <div className='bg-red-600 text-lg text-center font-black mb-2 text-white p-3 rounded-md uppercase'>
            <p>All fields are required</p>
          </div>)
        }

        <div className="mb-5">
          <label htmlFor="mascot" className="block text-gray-700 uppercase font-bold">
            Nombre de la mascota
          </label>
          <input
            id = 'mascot'
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400"
            value={petName}
            onChange={(event) => setPetName(event.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="owner" className="block text-gray-700 uppercase font-bold">
            Nombre del propietario
          </label>
          <input
            id = 'owner'
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400"
            value={ownerName}
            onChange={(event) => setOwnerName(event.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            E-mail del propietario
          </label>
          <input
            id = 'email'
            type="email"
            placeholder="E-mail del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="doneDate" className="block text-gray-700 uppercase font-bold">
            Fecha de alta
          </label>
          <input
            id = 'doneDate'
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="description" className="block text-gray-700 uppercase font-bold">
            Sintomas
          </label>
          <textarea 
            id="description"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400"
            placeholder="Describe los sintomas"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>

        <input 
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all rounded-md"
          value="Agregar paciente"
        />

      </form>
    </div>
  )
}

export default Form