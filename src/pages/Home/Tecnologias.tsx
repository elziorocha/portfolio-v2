import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaLaravel, FaVuejs } from "react-icons/fa6";
import {
    SiVisualstudio, SiTailwindcss, SiJavascript, SiTypescript, SiNextdotjs, SiMongodb,
    SiVite, SiEslint, SiClerk, SiFirebase, SiSocketdotio, SiCypress,
    SiPrisma,
    SiPhp,
    SiSupabase
} from "react-icons/si";

const Tecnologias = () => {
    return (
        <>
            <div className="flex w-11/12 flex-col gap-8 self-center rounded-xl border-8 border-black px-5 py-8
            text-neutral-800 shadow-inset dark:border-[#bdb6b600] dark:text-neutral-600
            dark:shadow-dark-inset md:p-12 lg:w-5/12">

                <h1 className="mb-2 text-center text-3xl font-bold text-orange-600 text-shadow-md
                dark:text-violet-800 dark:text-shadow sm:text-3xl md:text-4xl">
                    Tecnologias Utilizadas
                </h1>

                <div className="icons-container flex flex-wrap items-center justify-center gap-4">
                    <SiVisualstudio className="transition-all hover:text-sky-700" />
                    <FaHtml5 className="transition-all hover:text-orange-700" />
                    <FaCss3Alt className="transition-all hover:text-blue-700" />
                    <SiTailwindcss className="transition-all hover:text-sky-500" />
                    <SiJavascript className="transition-all hover:text-yellow-500" />
                    <SiTypescript className="transition-all hover:text-blue-600" />
                    <FaReact className="transition-all hover:text-sky-800" />
                    <FaVuejs className="transition-all hover:text-emerald-500" />
                </div>

                <div className="icons-container flex flex-wrap items-center justify-center gap-4">
                    <FaNodeJs className="transition-all hover:text-green-600" />
                    <SiPhp className="transition-all hover:text-violet-500" />
                    <FaLaravel className="transition-all hover:text-red-600" />
                    <FaDatabase className="transition-all hover:text-gray-500" />
                    <SiMongodb className="transition-all hover:text-emerald-700" />
                    <SiPrisma className="transition-all hover:text-gray-400" />
                    <SiSupabase className="transition-all hover:text-emerald-700" />
                    <SiFirebase className="transition-all hover:text-amber-500" />
                </div>

                <div className="icons-container flex flex-wrap items-center justify-center gap-4">
                    <FaGitAlt className="transition-all hover:text-red-500" />
                    <SiEslint className="transition-all hover:text-purple-800" />
                    <SiVite className="transition-all hover:text-yellow-600" />
                    <SiNextdotjs className="transition-all hover:text-black" />
                    <SiClerk className="transition-all hover:text-indigo-500" />
                    <SiCypress className="transition-all hover:text-emerald-500" />
                    <SiSocketdotio className="transition-all hover:text-gray-400" />
                </div>
            </div>
        </>
    )
}

export default Tecnologias;
