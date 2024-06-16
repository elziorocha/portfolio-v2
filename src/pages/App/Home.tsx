import Apresentação from "../Home/Apresentação"
import Contato from "../Home/Contato"
import Inicio from "../Home/Inicio"
import Portfolio from "../Home/Portfolio"
import Tecnologias from "../Home/Tecnologias"


const Home = () => {
    return (
        <div className='mb-20 flex flex-col gap-16'>
            <Inicio />
            <Apresentação />
            <Tecnologias />
            <Portfolio />
            <Contato />
        </div>
    )
}

export default Home