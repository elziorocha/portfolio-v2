


const Portfolio = () => {
    return (
        <>
            <h1 className="mt-4 text-center text-3xl font-bold text-orange-600
            text-shadow-md dark:text-violet-800 dark:text-shadow md:text-6xl">
                Meus Projetos
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-10">

                <div className="group relative cursor-pointer items-center justify-center overflow-hidden 
                rounded-xl border-4 border-black shadow-portfolio dark:shadow-dark-portfolio">
                    <div className="relative size-80">
                        <img src={'/images/pampaapp.png'} alt="PampaApp" className="size-full object-cover" />
                        <div className="absolute inset-0 bg-orange-600/85 backdrop-blur-sm transition-all duration-500 group-hover:bg-orange-600/0
                        group-hover:backdrop-blur-none dark:bg-violet-700/85">
                            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                                <span className="text-3xl font-bold text-white text-shadow">PampaApp</span>
                            </div>
                        </div>
                    </div>
                    <a href='https://pampaapp.vercel.app/' target="_blank" rel="noopener noreferrer">
                        <div className="absolute inset-0 flex h-20 translate-y-80 items-center justify-center border-t-4 border-black bg-black/95 transition-all duration-500 group-hover:translate-y-60">
                            <button className="group text-2xl font-bold text-white hover:bg-orange-600/0 group-hover:backdrop-blur-none">Acessar</button>
                        </div>
                    </a>
                </div>

                <div className="group relative cursor-pointer items-center justify-center overflow-hidden 
                rounded-xl border-4 border-black shadow-portfolio dark:shadow-dark-portfolio">
                    <div className="relative size-80">
                        <img src={'/images/PampasGym.png'} alt="Pampa's Gym" className="size-full object-cover" />
                        <div className="absolute inset-0 bg-orange-600/85 backdrop-blur-sm transition-all duration-500 group-hover:bg-orange-600/0
                        group-hover:backdrop-blur-none dark:bg-violet-700/85">
                            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                                <span className="text-3xl font-bold text-white text-shadow">Pampa's Gym</span>
                            </div>
                        </div>
                    </div>
                    <a href='https://pampas-gym.netlify.app/' target="_blank" rel="noopener noreferrer">
                        <div className="absolute inset-0 flex h-20 translate-y-80 items-center justify-center border-t-4 border-black bg-black/95 transition-all duration-500 group-hover:translate-y-60">
                            <button className="group text-2xl font-bold text-white hover:bg-orange-600/0 group-hover:backdrop-blur-none">Acessar</button>
                        </div>
                    </a>
                </div>

                <div className="group relative cursor-pointer items-center justify-center overflow-hidden
                rounded-xl border-4 border-black shadow-portfolio dark:shadow-dark-portfolio">
                    <div className="relative size-80">
                        <img src={'/images/diskype.png'} alt="Diskype" className="h-auto max-w-full object-cover" />
                        <div className="absolute inset-0 bg-orange-600/85 backdrop-blur-sm transition-all duration-500 group-hover:bg-orange-600/0
                        group-hover:backdrop-blur-none dark:bg-violet-700/85">
                            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                                <span className="text-3xl font-bold text-white text-shadow">Diskype</span>
                            </div>
                        </div>
                    </div>
                    <a href='https://main--diskype.netlify.app/' target="_blank" rel="noopener noreferrer">
                        <div className="absolute inset-0 flex h-20 translate-y-80 items-center justify-center border-t-4 border-black bg-black/95 transition-all duration-500 group-hover:translate-y-60">
                            <button className="group text-2xl font-bold text-white hover:bg-orange-600/0 group-hover:backdrop-blur-none">Acessar</button>
                        </div>
                    </a>
                </div>

                <div className="group relative cursor-pointer items-center justify-center overflow-hidden 
                rounded-xl border-4 border-black shadow-portfolio dark:shadow-dark-portfolio">
                    <div className="relative size-80">
                        <img src={'/images/PampaWeather.png'} alt="Pampa Weather" className="size-full object-cover" />
                        <div className="absolute inset-0 bg-orange-600/85 backdrop-blur-sm transition-all duration-500 group-hover:bg-orange-600/0
                        group-hover:backdrop-blur-none dark:bg-violet-700/85">
                            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                                <span className="text-3xl font-bold text-white text-shadow">PampaWeather</span>
                            </div>
                        </div>
                    </div>
                    <a href='https://pampaweather.netlify.app/' target="_blank" rel="noopener noreferrer">
                        <div className="absolute inset-0 flex h-20 translate-y-80 items-center justify-center border-t-4 border-black bg-black/95 transition-all duration-500 group-hover:translate-y-60">
                            <button className="group text-2xl font-bold text-white hover:bg-orange-600/0 group-hover:backdrop-blur-none">Acessar</button>
                        </div>
                    </a>
                </div>

                <div className="group relative cursor-pointer items-center justify-center overflow-hidden 
                rounded-xl border-4 border-black shadow-portfolio dark:shadow-dark-portfolio">
                    <div className="relative size-80">
                        <img src={'/images/chatroom.png'} alt="chatroom" className="size-full object-cover" />
                        <div className="absolute inset-0 bg-orange-600/85 backdrop-blur-sm transition-all duration-500 group-hover:bg-orange-600/0
                        group-hover:backdrop-blur-none dark:bg-violet-700/85">
                            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                                <span className="text-3xl font-bold text-white text-shadow">Chatroom</span>
                            </div>
                        </div>
                    </div>
                    <a href='https://chatroom-3qbp.onrender.com' target="_blank" rel="noopener noreferrer">
                        <div className="absolute inset-0 flex h-20 translate-y-80 items-center justify-center border-t-4 border-black bg-black/95 transition-all duration-500 group-hover:translate-y-60">
                            <button className="group text-2xl font-bold text-white hover:bg-orange-600/0 group-hover:backdrop-blur-none">Acessar</button>
                        </div>
                    </a>
                </div>

                <div className="group relative cursor-pointer items-center justify-center overflow-hidden 
                rounded-xl border-4 border-black shadow-portfolio dark:shadow-dark-portfolio">
                    <div className="relative size-80">
                        <img src={'/images/WorldTravel.png'} alt="weather app" className="size-full object-cover" />
                        <div className="absolute inset-0 bg-orange-600/85 backdrop-blur-sm transition-all duration-500 group-hover:bg-orange-600/0
                        group-hover:backdrop-blur-none dark:bg-violet-700/85">
                            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                                <span className="text-3xl font-bold text-white text-shadow">WorldTravel</span>
                            </div>
                        </div>
                    </div>
                    <a href='https://worldtravel.onrender.com/' target="_blank" rel="noopener noreferrer">
                        <div className="absolute inset-0 flex h-20 translate-y-80 items-center justify-center border-t-4 border-black bg-black/95 transition-all duration-500 group-hover:translate-y-60">
                            <button className="group text-2xl font-bold text-white hover:bg-orange-600/0 group-hover:backdrop-blur-none">Acessar</button>
                        </div>
                    </a>
                </div>

                <div className="group relative cursor-pointer items-center justify-center overflow-hidden 
                rounded-xl border-4 border-black shadow-portfolio dark:shadow-dark-portfolio">
                    <div className="relative size-80">
                        <img src={'/images/glasscalendar.png'} alt="glass calendar" className="size-full object-cover" />
                        <div className="absolute inset-0 bg-orange-600/85 backdrop-blur-sm transition-all duration-500 group-hover:bg-orange-600/0
                        group-hover:backdrop-blur-none dark:bg-violet-700/85">
                            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                                <span className="text-3xl font-bold text-white text-shadow">Glass Calendar</span>
                            </div>
                        </div>
                    </div>
                    <a href='https://glass-calendar.onrender.com' target="_blank" rel="noopener noreferrer">
                        <div className="absolute inset-0 flex h-20 translate-y-80 items-center justify-center border-t-4 border-black bg-black/95 transition-all duration-500 group-hover:translate-y-60">
                            <button className="group text-2xl font-bold text-white hover:bg-orange-600/0 group-hover:backdrop-blur-none">Acessar</button>
                        </div>
                    </a>
                </div>

                <div className="group relative cursor-pointer items-center justify-center overflow-hidden 
                rounded-xl border-4 border-black shadow-portfolio dark:shadow-dark-portfolio">
                    <div className="relative size-80">
                        <img src={'/images/Login1.png'} alt="login 1" className="size-full object-cover" />
                        <div className="absolute inset-0 bg-orange-600/85 backdrop-blur-sm transition-all duration-500 group-hover:bg-orange-600/0
                        group-hover:backdrop-blur-none dark:bg-violet-700/85">
                            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                                <span className="text-3xl font-bold text-white text-shadow">Login 1</span>
                            </div>
                        </div>
                    </div>
                    <a href='https://login1-gct3.onrender.com' target="_blank" rel="noopener noreferrer">
                        <div className="absolute inset-0 flex h-20 translate-y-80 items-center justify-center border-t-4 border-black bg-black/95 transition-all duration-500 group-hover:translate-y-60">
                            <button className="group text-2xl font-bold text-white hover:bg-orange-600/0 group-hover:backdrop-blur-none">Acessar</button>
                        </div>
                    </a>
                </div>

                <div className="group relative cursor-pointer items-center justify-center overflow-hidden 
                rounded-xl border-4 border-black shadow-portfolio dark:shadow-dark-portfolio">
                    <div className="relative size-80">
                        <img src={'/images/Login2.png'} alt="login 2" className="size-full object-cover" />
                        <div className="absolute inset-0 bg-orange-600/85 backdrop-blur-sm transition-all duration-500 group-hover:bg-orange-600/0
                        group-hover:backdrop-blur-none dark:bg-violet-700/85">
                            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                                <span className="text-3xl font-bold text-white text-shadow">Login 2</span>
                            </div>
                        </div>
                    </div>
                    <a href='https://login2-k6nh.onrender.com' target="_blank" rel="noopener noreferrer">
                        <div className="absolute inset-0 flex h-20 translate-y-80 items-center justify-center border-t-4 border-black bg-black/95 transition-all duration-500 group-hover:translate-y-60 dark:bg-violet-700/85">
                            <button className="group text-2xl font-bold text-white hover:bg-orange-600/0 group-hover:backdrop-blur-none">Acessar</button>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Portfolio