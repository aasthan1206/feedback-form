import './index.css'
import Header from './components/Header'
import Form from './components/Form'

function App() {

  const fillForm = (details) => {
    console.log(details)
  }

  return (
    <div className="container">
      <Header />
      <Form onAdd={fillForm} />
    </div>
  )
}

export default App
