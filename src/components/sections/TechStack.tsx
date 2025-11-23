const TechStack = () => {
    const frontend = ['React', 'TypeScript', 'JavaScript', 'Next.js'];
    const styling = ['Tailwind CSS', 'CSS3',];
    const tools = ['Git', 'GitHub', 'VS Code', 'Shadcn UI', 'Figma'];

    return (
    <section className="
        container mx-auto px-4 md:px-6 lg:px-8
        font-mono mt-8 rounded-xl
        p-8 backdrop-blur-xl
        border border-yellow-500/30 dark:border-yellow-500/30
        bg-white/40 dark:bg-gray-900/80
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
        rounded-lg
        mb-4
    ">
    
        
        {/* Scanlines */}
        <div className="
            absolute inset-0 
            bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.03)_50%)]
            bg-[length:100%_4px]
            pointer-events-none
            opacity-40
            rounded-xl
        "></div>
        
        <div className="relative z-10 space-y-8">
            {/* Header */}
            <h2 className="
            text-3xl font-bold text-center
            text-emerald-500 dark:text-emerald-400
            drop-shadow-[0_0_15px_currentColor]
            ">
            {'<TechStack />'}
            </h2>
            
            {/* Frontend */}
            <div>
            <h3 className="
                text-lg font-semibold mb-4
                text-yellow-500 dark:text-yellow-400
                border-l-4 border-yellow-500 dark:border-yellow-400
                pl-3
            ">
                Frontend
            </h3>
            <div className="flex flex-wrap gap-3">
                {frontend.map((tech) => (
                <span
                    key={tech}
                    className="
                    px-4 py-2
                    bg-emerald-500/10 dark:bg-yellow-400/10
                    border-2 border-emerald-500/50 dark:border-yellow-400/50
                    text-emerald-600 dark:text-yellow-400
                    rounded-lg
                    font-bold
                    transition-all duration-300
                    cursor-default
                    "
                >
                    {tech}
                </span>
                ))}
            </div>
            </div>
            
            {/* Styling */}
            <div>
            <h3 className="
                text-lg font-semibold mb-4
                text-yellow-500 dark:text-yellow-400
                border-l-4 border-yellow-500 dark:border-yellow-400
                pl-3
            ">
                Styling & Design
            </h3>
            <div className="flex flex-wrap gap-3">
                {styling.map((tech) => (
                <span
                    key={tech}
                    className="
                    px-4 py-2
                    bg-cyan-500/10 dark:bg-emerald-400/10
                    border-2 border-cyan-500/50 dark:border-emerald-400/50
                    text-cyan-600 dark:text-emerald-400
                    rounded-lg
                    font-bold
                    transition-all duration-300
                    cursor-default
                    "
                >
                    {tech}
                </span>
                ))}
            </div>
            </div>
            
            {/* Tools */}
            <div>
            <h3 className="
                text-lg font-semibold mb-4
                text-yellow-500 dark:text-yellow-400
                border-l-4 border-yellow-500 dark:border-yellow-400
                pl-3
            ">
                Tools & Workflow
            </h3>
            <div className="flex flex-wrap gap-3">
                {tools.map((tech) => (
                <span
                    key={tech}
                    className="
                    px-4 py-2
                    bg-purple-500/10 dark:bg-purple-400/10
                    border-2 border-purple-500/50 dark:border-purple-400/50
                    text-purple-600 dark:text-purple-400
                    rounded-lg
                    font-bold
                    transition-all duration-300
                    cursor-default
                    "
                >
                    {tech}
                </span>
                ))}
            </div>
            </div>
        </div>
        </section>
    );
};

export default TechStack