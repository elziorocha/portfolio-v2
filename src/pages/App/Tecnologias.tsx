import { FaHtml5, FaCss3Alt, FaReact, FaAngular, FaNodeJs, FaPhp, FaDatabase } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";
import { SiVisualstudio, SiTailwindcss, SiJavascript, SiTypescript, SiMongodb, SiVite, SiEslint,
SiClerk, SiFirebase, SiSocketdotio, SiCypress } from "react-icons/si";


const Tecnologias = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-6 text-neutral-700">
            <h1 className="mb-6 text-4xl font-bold text-orange-600 text-shadow-md">Tecnologias Utilizadas</h1>
            <div className="icons-container flex flex-row gap-4">
                <SiVisualstudio className="transition-all hover:text-sky-700"/>
                <FaHtml5 className="transition-all hover:text-orange-700"/>
                <FaCss3Alt className="transition-all hover:text-blue-700"/>
                <SiTailwindcss className="transition-all hover:text-sky-500"/>
                <SiJavascript className="transition-all hover:text-yellow-500"/>
                <SiTypescript className="transition-all hover:text-blue-600"/>
                <FaReact className="transition-all hover:text-sky-800"/>
                <FaAngular className="transition-all hover:text-red-600"/>
            </div>

            <div className="icons-container flex flex-row gap-4">
                <FaNodeJs className="transition-all hover:text-green-600"/>
                <FaPhp className="transition-all hover:text-violet-500" />
                <FaDatabase className="transition-all hover:text-gray-500"/>
                <SiMongodb className="transition-all hover:text-emerald-700"/>
            </div>

            <div className="icons-container flex flex-row gap-4">
                <FaGitAlt className="transition-all hover:text-red-500"/>
                <SiEslint className="transition-all hover:text-purple-800"/>
                <SiVite className="transition-all hover:text-yellow-600"/>
                <SiClerk className="transition-all hover:text-indigo-500"/>
                <SiFirebase className="transition-all hover:text-amber-500"/>
                <SiCypress className="transition-all hover:text-emerald-500"/>
                <SiSocketdotio className="transition-all hover:text-black"/>
            </div>
        </div>
    )
}

export default Tecnologias