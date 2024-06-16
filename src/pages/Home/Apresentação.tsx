import { CornerDownLeft, CornerDownRight } from "lucide-react"
import Typewriter from "../../Components/Typewriter"


const Apresentação = () => {
    return (
        <>
            <div className="flex flex-col gap-14 px-4 font-Nunito text-orange-600 xl:px-24">
                <div className="text-center text-3xl font-bold text-shadow-md lg:text-4xl">
                    <Typewriter />
                </div>

                <hr className="w-80 self-center rounded-full border-2 border-black lg:w-2/3" />

                <div className="mb-6 flex flex-col gap-8">
                    <div className="flex flex-row items-start gap-x-4">
                        <CornerDownRight size={35} />
                        <h1 className="w-2/3 items-start text-2xl font-semibold text-shadow">
                            Atualmente cursando o 6º Período Engenharia de Software na Instituição Faculdade Campo Real
                        </h1>
                    </div>
                    <div className="flex flex-row items-start gap-x-4">
                        <CornerDownRight size={35} />
                        <h1 className="w-2/3 items-start text-2xl font-semibold text-shadow">
                            Em busca de novos conhecimentos e práticas no ramo do Desenvolvimento Web
                        </h1>
                    </div>
                </div>

                <div className="flex flex-col gap-8 text-right">
                    <div className="ml-auto flex flex-row items-start gap-x-4">
                        <h1 className="ml-auto w-2/3 items-start text-2xl font-semibold text-shadow">
                            Colocando em prática tecnologias e conhecimentos obtidos em aulas e projetos pessoais
                        </h1>
                        <CornerDownLeft size={35} />
                    </div>
                    <div className="flex flex-row items-start gap-x-4">
                        <h1 className="ml-auto w-2/3 items-start text-2xl font-semibold text-shadow">
                            Buscando experiência profissional no ramo da tecnologia e desenvolvimento
                            de software para aperfeiçoar meus conhecimentos
                        </h1>
                        <CornerDownLeft size={35} />
                    </div>
                </div>

                <hr className="w-80 self-center rounded-full border-2 border-black lg:w-2/3" />
            </div>
        </>
    )
}

export default Apresentação