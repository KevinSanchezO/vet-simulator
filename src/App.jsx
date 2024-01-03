import Header from "./components/Header"
import Form from "./components/Form"
import PacientsList from "./components/PacientsList"

function App() {
  
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form />
        <PacientsList />
      </div>
    </div>
  )
}

export default App
