import { FaGithub,FaArrowUpRightFromSquare } from "react-icons/fa6";


interface ProjectCardProps{
    title: string;
    image?: string;
    description: string;
    githubUrl: string;
    liveUrl?: string;
    tech: string[];
    myRole?: string;
    isTeam?: boolean;
}

const ProjectCard = ({
    title,
    image,
    description,
    githubUrl,
    liveUrl,
    tech,
    myRole,
    isTeam,
}:ProjectCardProps) => {
    return (
    
        <div
        className="container mx-auto px-4 md:px-6 lg:px-8
        font-mono mt-8 md:mt-12 rounded-xl text-gray-800 dark:text-yellow-400
        overflow-hidden p-6 border border-yellow-500/30
        bg-white/40 dark:bg-gray-900/80 dark:border-yellow-500/30
        shadow-[0_0_10px_#facc15] dark:shadow-[0_0_10px_#facc15]
        relative group ">

            {/* overlay layer */}
            <div className="
            absolute-inset-0 translate-y-0 group-hover:translate-y-full
            transition-all duration-300 bg-black/30">

            </div>

        

            {/* image display */}

            {image && 
            <img src={image}
            className="rounded-lg mb-2"
            />
            }

            <h2 className="flex justify-center text-center
            text-emerald-400 dark:text-emerald-400 text-lg font-bold
            mb-2 drop-shadow-[0_0_10px_currentColor]">
                {title}
            </h2>

            <div className="flex gap-4 pt-2 md:mt-4 justify-end">

                {githubUrl && 
                    <a href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    px-4 py-2 text-sm
                border border-cyan-500 dark:border-yellow-400
                text-emerald-500 dark:text-emerald-400
                rounded hover:scale-110 
                hover:bg-cyan-500 dark:hover:bg-yellow-400
                hover:text-white dark:hover:text-black transform
                transition-transform duration-300">
                        <FaGithub />
                    </a>
                }

                    {liveUrl && 
                    <a href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                    px-4 py-2 text-sm
                border border-cyan-500 dark:border-yellow-400
                text-emerald-500 dark:text-emerald-400
                rounded hover:scale-110 
                hover:bg-cyan-500 dark:hover:bg-yellow-400
                hover:text-white dark:hover:text-black transform
                transition-transform duration-300">
                        <FaArrowUpRightFromSquare />
                    </a>
                }

            </div>

              {/* Tech stack chips */}
        <div className="flex flex-wrap gap-2 mb-4 mt-2 md:mt-4">
            {tech.map((t) => (
            <span 
                key={t}
                className="
                px-2 py-1 text-xs
                bg-purple-500/20 border border-purple-500/50
                text-purple-600 dark:text-purple-400
                rounded
                "
            >
                {t}
            </span>
            ))}

            
        </div >

            {/* this div is for team projects */}
            {isTeam && 
            <div className="mt-2 md:mt-4">
                <h4 className="text-cyan-400 text-md font-bold
                dark:text-emerald-400">
                    My Role:
                </h4>
                <span>
                    {myRole}
                </span>
            </div>}

        {/*project description */}

        <div className="mt-2 md:mt-4">

            <p className="dark-gray-700 dark:text-gray-300 leading-relaxed text-base">
                {description}
            </p>

        </div>

        </div>

    )
}

export default ProjectCard