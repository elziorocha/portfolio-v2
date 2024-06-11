import Inicio from './pages/App/Inicio'
import './Global.css'
import Apresentação from './pages/App/Apresentação'
import Tecnologias from './pages/App/Tecnologias'
import Portfolio from './pages/App/Portfolio'
import Contato from './pages/App/Contato'

const App = () => {

  return (
    <div className='mb-16 flex flex-col gap-16'>
      <Inicio />
      <Apresentação />
      <Tecnologias />
      <Portfolio />
      <Contato />
    </div>
  )
}

export default App
