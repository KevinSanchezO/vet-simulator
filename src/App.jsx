import { useState } from "react"
import Header from "./components/Header"
import Form from "./components/Form"
import PacientsList from "./components/PacientsList"

function App() {
  
  const [pacients, setPacients] = useState([]);
  const [pacient, setPacient] = useState({});

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form
          pacients={pacients}
          setPacients={setPacients}
        />
        <PacientsList 
          pacients={pacients}
          setPacient={setPacient}
        />
      </div>
    </div>
  )
}

export default App
