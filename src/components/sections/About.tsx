import { TypeAnimation } from "react-type-animation";

const About = () => {
    return (
        <div
        className="container mx-auto px-4 md:px-6 lg:px-8
        font-mono mt-8 md:mt-12 rounded-xl text-gray-800 dark:text-yellow-400
        overflow-hidden p-6 backdrop-blur-xl border border-yellow-500/30
        bg-white/40 dark:bg-gray-900/80 dark:border-yellow-500/30 flex flex-col items-center space-y-6
        shadow-[0_0_10px_#facc15] dark:shadow-[0_0_10px_#facc15]
        relative
        before:content-['']
        before:absolute
        before:top-0
        before:left-0
        before:w-6
        before:h-6
        before:border-t-4
        before:border-l-4
        before:border-yellow-500 dark:before:border-yellow-500
        
        after:content-['']
        after:absolute
        after:top-0
        after:right-0
        after:w-6
        after:h-6
        after:border-t-4
        after:border-r-4
        after:border-yellow-500 dark:after:border-yellow-500
    
        mb-4">

                {/* header for our about section */}
            <div className="
            underline text-xl text-emerald-400">
                <TypeAnimation
                sequence={[
                    "Gathoni.exe.",
                    1000,
                    "Who is she?",
                    1000,
                ]}
                speed={50}
                cursor={true}
                repeat={Infinity}
                />

            </div>

                {/* text content goes here */}
            <div>
            <h2
            className=" text-2xl font-bold 
        text-cyan-400 dark:text-yellow-400
        drop-shadow-[0_0_10px_currentColor]
        mb-4"
            >Hi, I'm Gathoni</h2>
    <p className="text-base leading-relaxed
    text-gray-700 dark:text-gray-300">
        I'm a frontend developer and a Math and Computer Science student at JKUAT. I turn ideas into interfaces that feel effortless. Based in Nairobi, 
        I create interfaces that are both visually striking and 
        user-friendly.
    </p>

        <h3 className="flex items-center justify-center mt-2 mb-2
        underline text-lg  font-semibold
        text-emerald-600 dark:text-emerald-400
        
        pl-3 md:mt-6 md:mb-3"
        >What Do I Do?</h3>
    <p className="dark:text-stone-50">
        I specialize in React and TypeScript, building responsive 
        web applications with a focus on performance and accessibility.
    </p>
            </div>
            
        </div>

            )
    
    }

export default About