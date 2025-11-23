import { FaLinkedin, FaGithub } from "react-icons/fa6";


const Footer = () => {
    return (
        <div className="
        bg-stone-800/95 dark:bg-slate-950/95 rounded-lg
        border border-yellow-500/30 dark:border-emerald-400/30
        shadow-[0_0_20px_rgba(250, 204, 21, 0.3)] dark:shadow-[0_0_20px_rgba(52, 211, 153, 0.3)]
        mt-4 md:mt-6">
            {/* top part of our footer */}
            <div className="p-3">

                {/* first line */}
                <div className="flex justify-between">
                    <div>
                        <img src="/Edgerunners.jpg"
                        className="rounded-full w-[20px] object-contain " />
                        <h2>

                        </h2>
                    </div>

                    <div className="flex gap-2 md:gap-8 mr-10">
                    {/* links */}
                    <a href="#projects"
                    className="cursor-pointer text-yellow-500 dark:text-emerald-400
                    font-mono tracking-wide relative transition-all duration-300 ease-in-out
                    hover:text-emerald-500 dark:hover:text-yellow-500
                    hover:underline hover:scale-110 transform hover:translate-y-0.5 ">
                    Projects
                    </a>

                    <a href="#about"
                    className="cursor-pointer text-yellow-500 dark:text-emerald-400
                    font-mono tracking-wide relative transition-all duration-300 ease-in-out
                    hover:text-emerald-500 dark:hover:text-yellow-500
                    hover:underline hover:scale-110 transform hover:translate-y-0.5 ">
                    About
                    </a>

                    <a href="#contact"
                    className="cursor-pointer text-yellow-500 dark:text-emerald-400
                    font-mono tracking-wide relative transition-all duration-300 ease-in-out
                    hover:text-emerald-500 dark:hover:text-yellow-500
                    hover:underline hover:scale-110 transform hover:translate-y-0.5 ">
                    Contact
                    </a>
                    </div>
                </div>

                {/* footer icons */}
                <div className="flex justify-center items-center mt-2 md:mt-3
                gap-4
                ">

                    <a href="https://www.linkedin.com/in/gathoni-karume-43791b2aa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Linkedin Profile"
                    className="hover:scale-110 transform
                    transition-transform duration-300 hover:bg-yellow-400 dark:hover:bg-emerald-500
                    hover:drop-shadow-[0_0_5px_#facc15] px-4 py-2 text-md text-emerald-500 dark:text-emerald-400
                    border-yellow-400 dark:border-yellow-400 border rounded-md hover:text-stone-50">
                        <FaLinkedin />
                    </a>

                    <a href="https://github.com/Gathoni-K"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="hover:scale-110 transform
                    transition-transform duration-300 hover:bg-yellow-400 dark:hover:bg-emerald-500
                    hover:drop-shadow-[0_0_5px_#facc15] px-4 py-2 text-md border 
                    border-yellow-400 dark:border-yellow-400 rounded-md text-emerald-500 dark:text-emerald-400 
                    hover:text-stone-50"
                    >
                        <FaGithub />
                    </a>

                </div>

                <hr className="border-gray-400 mt-2"/>

            </div>

            {/* bottom part of footer */}
            <div className="">
                <p className="text-center font-mono text-gray-500 dark:text-gray-500">
                    @2025 G.Karume | Sandevistan v.3.2 | Portfolio Powered by Night City Tech
                </p>

            </div>
        </div>
    )
}

export default Footer