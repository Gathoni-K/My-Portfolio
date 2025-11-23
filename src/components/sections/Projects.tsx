import ProjectCard from "../ui/ProjectCard";
import { projectCategories } from "../../data/projects";

const Projects = () => {
    return (
        
        <section className="
        mx-auto container px-4 md:px-6 lg:px-8
        ">

            <h2 className="
            text-3xl font-bold text-center text-emerald-500
            dark:text-emerald-400 drop-shadow-[0_0_15px_currentColor]
            font-mono mt-4 md:mt-6 underline">
                What Have I built so Far?
            </h2>

            {projectCategories.map((category) => (
    <div key={category.id}>
        <h2
        className="font-mono text-center mt-3 md:mt-6 font-bold
        text-yellow-500 bg-white w-[60%] mx-auto md:w-[20%] underline rounded-lg
        p-2 md:p-4 shadow-[0_0_10px_#facc15] dark:shadow-[0_0_10px_#facc15]
        dark:bg-gray-900/80"
        >
        {category.title}
        </h2>
        
        
        <div className="grid md:grid-cols-2 gap-4">
        {category.projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
        ))}
        </div>
    </div>
))}
            
            
        </section>
    )
}

export default Projects