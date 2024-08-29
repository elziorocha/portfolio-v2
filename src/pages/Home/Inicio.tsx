import Typewriter from "../../Components/Typewriter"


const Inicio = () => {
    return (
        <>
            <div className="mt-24 flex w-10/12 flex-col items-center justify-center gap-12 self-center rounded-xl
            border-4 border-black p-10 text-orange-600 shadow-inset dark:border-[#bdb6b600]
            dark:text-violet-800 md:p-16 lg:flex-row lg:p-12 xl:w-9/12">
                <div className="flex flex-col gap-4 text-center font-semibold text-shadow-md dark:text-shadow">
                    <h1 className="text-[2.75rem] md:text-7xl xl:text-7xl">Enzo Rocha</h1>
                    <h1 className="text-3xl md:text-5xl xl:text-5xl">Desenvolvedor de Software</h1>
                </div>
                <img src={'/images/eu1.jpg'} alt="foto" className="custom-border-radius size-64 border-4 border-orange-600 object-cover 
                shadow-[0_0_15px_4px_rgb(0,0,0)] dark:border-violet-800" />
            </div>

            <div className="text-center font-Nunito text-3xl font-bold text-orange-600 text-shadow-md dark:text-violet-800 dark:text-shadow lg:text-4xl">
                <Typewriter />
            </div>
        </>
    )
}

export default Inicio