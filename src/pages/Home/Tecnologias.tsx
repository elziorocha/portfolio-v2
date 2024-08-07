import { FaHtml5, FaCss3Alt, FaReact, FaAngular, FaNodeJs, FaPhp, FaDatabase } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import {
    SiVisualstudio, SiTailwindcss, SiJavascript, SiTypescript, SiNextdotjs, SiMongodb,
    SiVite, SiEslint, SiClerk, SiFirebase, SiSocketdotio, SiCypress
} from "react-icons/si";

const Tecnologias = () => {
    return (
        <>
            <div className="flex w-11/12 max-w-4xl flex-col items-center justify-center gap-8 self-center rounded 
            border-8 border-black px-3 py-8 font-Nunito text-neutral-800 shadow-[inset_0_3px_30px_10px_rgb(0,0,0)] dark:border-[#bdb6b600]
            dark:text-neutral-600 dark:shadow-[inset_0_3px_25px_6px_rgb(0,0,0)] md:p-12 lg:w-2/3">
                <h1 className="mb-3 text-center text-3xl font-bold text-orange-600 text-shadow-md
                dark:text-violet-800 dark:text-shadow sm:text-3xl md:text-4xl">
                    Tecnologias Utilizadas
                </h1>

                <div className="icons-container grid grid-cols-4 gap-4 md:grid-cols-8">
                    <SiVisualstudio className="transition-all hover:text-sky-600" />
                    <FaHtml5 className="transition-all hover:text-orange-700" />
                    <FaCss3Alt className="transition-all hover:text-blue-700" />
                    <SiTailwindcss className="transition-all hover:text-sky-500" />
                    <SiJavascript className="transition-all hover:text-yellow-500" />
                    <SiTypescript className="transition-all hover:text-blue-600" />
                    <FaReact className="transition-all hover:text-sky-800" />
                    <FaAngular className="transition-all hover:text-red-600" />
                </div>

                <div className="icons-container grid grid-cols-3 gap-4 sm:grid-cols-6">
                    <FaGitAlt className="transition-all hover:text-red-500" />
                    <FaNodeJs className="transition-all hover:text-green-600" />
                    <FaPhp className="transition-all hover:text-violet-500" />
                    <FaDatabase className="transition-all hover:text-gray-500" />
                    <SiMongodb className="transition-all hover:text-emerald-700" />
                    <SiFirebase className="transition-all hover:text-amber-500" />
                </div>

                <div className="icons-container grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
                    <SiEslint className="transition-all hover:text-purple-800" />
                    <SiVite className="transition-all hover:text-yellow-600" />
                    <SiNextdotjs className="transition-all hover:text-black" />
                    <SiClerk className="transition-all hover:text-indigo-500" />
                    <SiCypress className="transition-all hover:text-emerald-500" />
                    <SiSocketdotio className="transition-all hover:text-black" />
                </div>
            </div>
        </>
    )
}

export default Tecnologias;
