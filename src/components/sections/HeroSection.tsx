import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
    return (
        <div 
            className="container mx-auto p-6 w-[70%] max-w-[1200px]
            relative
            text-gray-800 dark:text-yellow-400
            font-mono rounded-xl overflow-hidden
            mt-8 md:mt-12

            bg-white/40 dark:bg-gray-900/80
            backdrop-blur-xl border border-yellow-500/30 dark:border-yellow-500/30

            shadow-[0_0_25px_#facc15] dark:shadow-[0_0_25px_#facc15]
            hover:shadow-[0_0_40px_#facc15] dark:hover:shadow-[0_0_40px_#facc15]
            transition-all duration-300

            flex flex-col items-center space-y-6
        "
        >

            {/* Scanline overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.04]
            bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px)]
            bg-size-[100%_3px]"></div>

            


            {/* Title */}
            <div className="text-center text-yellow-400 dark:text-emerald-400">
                <TypeAnimation
                    preRenderFirstString={true}
                    sequence={[
                        500,
                        "> Initializing....",
                        1000,
                        "Gathoni Karume █",
                    ]}
                    speed={50}
                    style={{ 
                        whiteSpace: "pre-line",
                        fontSize: "1.5rem",
                    }}
                    repeat={Infinity}
                />
            </div>

            {/* Position */}
            <div className="text-center text-lg">
                <TypeAnimation
                    sequence={[
                        1000,
                        "> Position \n Junior Frontend Developer.",
                    ]}
                    speed={50}
                    style={{ 
                        whiteSpace: "pre-line",
                        
                    }}
                    repeat={Infinity}
                />
            </div>

            {/* Location */}
            <div className="text-center">
                <TypeAnimation
                    sequence={[
                        1000,
                        "> Location \n Nairobi \n Open To Work Remote.",
                    ]}
                    speed={50}
                    style={{ whiteSpace: "pre-line" }}
                    repeat={Infinity}
                />
            </div>

            {/* CTA BUTTONS SECTION */}

                <div className="flex space-x-4 pt-2">
    <a href="#projects" 
    className="px-4 py-2 rounded-lg bg-emerald-900 text-white 
    hover:bg-emerald-900 dark:bg-yellow-400 dark:text-black dark:hover:bg-yellow-300
    transition-transform duration-300 cursor-pointer hover:scale-110 transform ">
        View Projects
    </a>

    <button className="px-4 py-2 rounded-lg border border-emerald-600 
    dark:border-yellow-400 text-emerald-700 dark:text-yellow-400
    hover:bg-emerald-100 dark:hover:bg-gray-800 transition-transform cursor-pointer
    hover:scale-110 transform duration-300">
        Download CV
    </button>
    </div>



        </div>
    );
};

export default HeroSection;
