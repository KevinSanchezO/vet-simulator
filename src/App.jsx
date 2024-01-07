import { useState, useEffect } from "react"
import Header from "./components/Header"
import Form from "./components/Form"
import PacientsList from "./components/PacientsList"

function App() {
  
  const [pacients, setPacients] = useState([]);
  const [pacient, setPacient] = useState({});

  useEffect(() => {
    const retrieveLocalStorage = () => {
      const pacientsLS = JSON.parse(localStorage.getItem('pacients')) ?? [];
      setPacients(pacientsLS);
    }
    retrieveLocalStorage();
  }, []);

  useEffect(() => {
    localStorage.setItem('pacients', JSON.stringify(pacients));
  }, [pacients]);

  const deletePacient = (id) => {
    const newPacientsList = pacients.filter( pacientState => pacientState.id != id)
    setPacients(newPacientsList)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form
          pacients={pacients}
          setPacients={setPacients}
          pacient={pacient}
          setPacient={setPacient}
        />
        <PacientsList 
          pacients={pacients}
          setPacient={setPacient}
          deletePacient={deletePacient}
        />
      </div>
    </div>
  )
}

export default App
