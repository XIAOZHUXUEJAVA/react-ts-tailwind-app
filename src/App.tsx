import Accordion from "./components/accordion"
import accordianData from "./components/accordion/data"

function App() {

  return (
    <>
      <div>
        <h1 className="justify-center flex text-cyan-300 text-2xl">Accordion Example</h1>
        <Accordion items={accordianData} />
      </div>
    </>
  )
}

export default App
