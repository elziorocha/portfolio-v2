import { FaGithubSquare, FaLinkedin, FaWhatsappSquare, FaEnvelopeSquare } from 'react-icons/fa';


const Contato = () => {
    return (
        <>
            <h1 className="mt-8 text-center text-5xl font-bold text-orange-600 text-shadow-md">Entre em contato comigo!</h1>
            
            <div className="flex flex-row flex-wrap items-center justify-center gap-28 p-8">
                <FaEnvelopeSquare className='size-28 cursor-pointer rounded-md
                border-4 border-black bg-white
                shadow-[-5px_5px_0_1px_#ea580c,-8px_8px_0px_1px_black,-3px_8px_0px_1px_black,-8px_2px_0px_1px_black]
                transition-all duration-200 hover:text-email'/>

                <FaWhatsappSquare className='size-28 cursor-pointer rounded-md
                border-4 border-black bg-white
                shadow-[-5px_5px_0_1px_#ea580c,-8px_8px_0px_1px_black,-3px_8px_0px_1px_black,-8px_2px_0px_1px_black]
                transition-all duration-200 hover:text-whatsapp'/>

                <a href="https://www.linkedin.com/in/elziorocha/"><FaLinkedin className='size-28 cursor-pointer rounded-md
                border-4 border-black bg-white
                shadow-[-5px_5px_0_1px_#ea580c,-8px_8px_0px_1px_black,-3px_8px_0px_1px_black,-8px_2px_0px_1px_black]
                transition-all duration-200 hover:text-linkedin'/></a>

                <a href='https://github.com/elziorocha'><FaGithubSquare className='size-28 cursor-pointer rounded-md
                border-4 border-black bg-white
                shadow-[-5px_5px_0_1px_#ea580c,-8px_8px_0px_1px_black,-3px_8px_0px_1px_black,-8px_2px_0px_1px_black]
                transition-all duration-200 hover:text-github'/></a>
            </div>
        </>
    )
}

export default Contato