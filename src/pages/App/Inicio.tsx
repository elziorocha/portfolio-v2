


const Inicio = () => {
    return (
        <div className="mt-24 flex w-9/12 flex-row items-center justify-center gap-12 self-center rounded-3xl
        p-12 font-Nunito text-orange-600 shadow-[inset_0_0_20px_7px_rgb(0,0,0)]">
            <div className="flex flex-col gap-4 text-center font-semibold text-shadow-md">
                <h1 className="text-7xl">Enzo Rocha</h1>
                <h1 className="text-5xl">Desenvolvedor FrontEnd</h1>
            </div>
            <img src={''} alt="foto" className="custom-border-radius size-64 border-4 border-orange-600 
            shadow-[0_0_20px_4px_rgb(0,0,0)]" />
        </div>
    )
}

export default Inicio