import Toggle from "../ui/Toggle";


interface NavBarProps {
    isDark: boolean;
    setIsDark: (value: boolean) => void;
}

const linkStyles = `
    relative
    cursor-pointer
    text-yellow-500 dark:text-emerald-400
    font-mono
    tracking-wide
    transition-all
    duration-300
    hover:text-emerald-500 dark:hover:text-yellow-300
    hover:drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]
    dark:hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]
    before:content-['']
    before:absolute
    before:bottom-0
    before:left-0
    before:w-0
    before:h-[2px]
    before:bg-yellow-500
    dark:before:bg-emerald-400
    before:transition-all
    before:duration-300
    hover:before:w-full
    group
    
`;

const NavBar = ({ isDark, setIsDark }: NavBarProps) => {
    return (
        <div className="
        relative
        pt-1
        bg-stone-800/95 dark:bg-slate-950/95
        flex justify-around items-center 
        p-3 md:p-5
        rounded-lg 
        gap-2
        border border-yellow-500/30 dark:border-emerald-400/30
        shadow-[0_0_20px_rgba(250,204,21,0.3)] dark:shadow-[0_0_20px_rgba(52,211,153,0.3)]
        backdrop-blur-sm
        
        
        after:content-['']
        after:absolute
        after:top-0
        after:right-0
        after:w-4
        after:h-4
        after:border-t-2
        after:border-r-2
        after:border-yellow-500 dark:after:border-emerald-400
        after:rounded-tr-lg
        
       
        before:content-['']
        before:absolute
        before:bottom-0
        before:left-0
        before:w-4
        before:h-4
        before:border-b-2
        before:border-l-2
        before:border-yellow-500 dark:before:border-emerald-400
        before:rounded-bl-lg
        
        
        `*:relative`
        `*:z-10`
        ">
        {/* Scanlines overlay */}
        <div className="
            absolute 
            inset-0 
            bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.05)_50%)]
            bg-size-[100%_4px]
            pointer-events-none
            rounded-lg
            opacity-50
        "></div>
        
        {/* Additional corner decorations */}
        <div className="
            absolute 
            top-0 
            left-0 
            w-4 
            h-4 
            border-t-2 
            border-l-2 
            border-yellow-500/50 dark:border-emerald-400/50
            rounded-tl-lg
        "></div>
        <div className="
            absolute 
            bottom-0 
            right-0 
            w-4 
            h-4 
            border-b-2 
            border-r-2 
            border-yellow-500/50 dark:border-emerald-400/50
            rounded-br-lg
        "></div>

        {/* Navbar links */}
        <div className="flex gap-4 md:gap-16">
            <a href="#about" className={linkStyles}>About</a>
            <a href="#projects" className={linkStyles}>Projects</a>
            <a href="#contact" className={linkStyles}>Contact</a>
        </div>

        {/* Toggle */}
        <Toggle 
            isDark={isDark} 
            setIsDark={setIsDark}
            leftLabel="Citizen Mode"
            rightLabel="EdgeRunner Mode"
            inactiveColor="text-stone-400 dark:text-gray-500"
            leftActiveColor="text-yellow-400"
            rightActiveColor="text-emerald-400"
        />
        </div>
    );
};

export default NavBar;