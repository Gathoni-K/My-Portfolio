export const projectCategories = [
    {
        id: 'personal',
        title: 'Personal Projects',
        projects: [
            {
        id:1,
        title: "Cluck & Co.",
        image: "/Cluck.png",
        description: "Cluck & Co is a small e-commerce website built around displaying poultry products like chicks and meat. Through this project, I practiced building product grids, handling reusable card components, organizing sections, and applying responsive Tailwind patterns. It helped me better understand layout consistency and structuring real-world e-commerce UI.",
        githubUrl: "https://github.com/Gathoni-K/Cluck-Co.",
        liveUrl: "https://cluck-co-v46b.vercel.app/",
        tech: ["Tailwind CSS", "Shadcn UI", "React", "TypeScript"],
        isTeam: false,
    },
    {
        id:2,
        title: "AniTrack",
        image: "/Anime.png",
        description: "AniTrack is a project that uses the JikanAPI to fetch anime data and lets users build a personalized watchlist. It includes search functionality, dynamic DOM updates, local storage persistence, and clean JavaScript architecture. The project taught me proper list management, user-driven state",
        githubUrl: "https://github.com/Gathoni-K/anime-watchlist",
        liveUrl: "https://anime-watchlist-jgp5ax333-gathoni-ks-projects.vercel.app/",
        tech: ["CSS Modules", "React", "TypeScript", "Jikan API"],
        isTeam: false,
    },
    {
        id:3,
        title: "WeatherWatch",
        image: "/WeatherWatch.png",
        description: "WeatherWatch is a JavaScript-powered weather dashboard that pulls real-time data from the OpenWeatherMap API. It features current weather details and a 5-day forecast rendered dynamically from API responses. Through this project, I developed a stronger understanding of asynchronous JavaScript (async/await), JSON parsing, error handling, and updating UI elements based on API data.",
        githubUrl: "https://github.com/Gathoni-K/Weather-App",
        liveUrl: "weather-app-swart-psi-42.vercel.app",
        tech: ["CSS3", "HTML", "Javascript", "OpenWeatherMap API"],
        isTeam: false,
    },
        ]
    },

    // team projects
    {
        id: 'team',
        title: 'Team Projects',
        projects: [
            {
        id:4,
        title: "Logigas",
        image: "/LogiGas.png",
        description: "LogiGas is a smart LPG delivery platform that uses location intelligence to streamline gas distribution and improve delivery efficiency. As the Frontend Engineer, I built the interactive map interface using React, TypeScript, Leaflet.js, and OpenStreetMap, focusing on visualizing delivery points and generating optimized routes for drivers. This project strengthened my skills in geospatial UI development, route calculation logic, reusable component design, and integrating mapping tools into a smooth, user-friendly workflow that makes complex logistics simpler for both drivers and dispatch.",
        githubUrl: "https://github.com/Gathoni-K/LogiGas---GreenWells-Hackathon-",
        liveUrl: "https://logi-gas-green-wells-hackathon-u6yz.vercel.app/",
        tech: ["CSS modules", "React", "OpenStreetMaps API", "TypeScript", "Leaflet JS"],
        isTeam: true,
        myRole: "Frontend Engineer",

    },
    {
        id:5,
        title: "Canopy",
        image: "/inProgress.png",
        description: "Canopy is a forest-monitoring web app that helps communities report local environmental threats and gives conservation teams a clear visual overview through an interactive map and simple analytics. As the Frontend Engineer, I built the entire dashboard using React, TypeScript, React-Leaflet, and Tailwind CSS—implementing dynamic map rendering, data-driven charts, and a responsive layout. This project pushed me to learn how to integrate mapping libraries, structure reusable components, handle real-time data patterns, and design clean visualizations that make complex information easy to understand.",
        githubUrl: "https://github.com/Gathoni-K/Canopy",
        tech: ["TailwindCSS", "React", "Chart JS", "React-Leaflet", "Typescript"],
        isTeam: true,
        myRole: "Frontend Engineer"
    },
    {
        id:6,
        title: "DryPlan",
        image: "/eventDetails.jpeg",
        description: "DryPlan is a hackathon project that helps users plan events with smart, weather-aware insights. I built the Event Detail Page, which displays dynamic event information, an hour-by-hour weather timeline, rain probability indicators, and backup plan suggestions. I also integrated the page with the backend using React and CSS Modules, handling data fetching from the event and detailed forecast APIs, plus loading and error states to ensure a smooth user experience.",
        githubUrl: "https://github.com/OliveAlila/DryPlan/tree/main/frontend",
        liveUrl: "https://dry-plan-p4cw46sy2-olivealilas-projects.vercel.app/",
        tech: ["React", "CSS modules", "Rest APIs"],
        isTeam: true,
        myRole: "Frontend Engineer"
    },

        ]
    },


]