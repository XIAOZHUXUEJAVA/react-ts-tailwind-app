import Accordion from "./components/accordion"
import data from "./components/accordion/data"

function App() {

  return (
    <>
      <div>
        <h1>Accordion Example</h1>
        <Accordion items={data} />
      </div>
    </>
  )
}

export default App
