
import Contato from '../Home/Contato';
import Inicio from '../Home/Inicio';
import Portfolio from '../Home/Portfolio';
import Tecnologias from '../Home/Tecnologias';
import { useTheme } from '../../Components/darkMode';
import { Moon, Sun } from 'lucide-react';

const Home = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <>
            <div className='flex justify-center'>
                <button onClick={toggleTheme}
                className={`absolute mt-5 flex items-center gap-4 border-4 border-black px-2 py-1.5 transition duration-500
                ${theme === 'light' ? 'bg-amber-300' : 'bg-gray-800'} rounded-full`}
                >
                    <Sun size={35} className={`transition duration-500 ${theme === 'light' ? 'text-gray-500' : 'text-amber-500'}`} />
                    <Moon size={35} className={`transition duration-500 ${theme === 'light' ? 'text-black' : 'text-gray-500'}`} />
                </button>
            </div>
            <div className='mb-20 flex flex-col gap-16'>
                <Inicio />
                <Tecnologias />
                <Portfolio />
                <Contato />
            </div>
        </>
    );
};

export default Home;
