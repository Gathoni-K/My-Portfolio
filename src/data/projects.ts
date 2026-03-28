export const projectCategories = [
    {
        id: 'personal',
        title: 'Personal Projects',
        projects: [
            {
        id:1,
        title: "Cluck & Co.",
        image: "/Cluck.png",
        description: "Cluck & Co is a responsive e-commerce storefront designed to streamline the browsing experience for agricultural products. Engineered with React and TypeScript, the platform features a dynamic product catalog, modular card components, and a mobile-first architecture. By leveraging Tailwind CSS and Shadcn UI, I implemented strict layout consistency and accessible design patterns to ensure a seamless shopping experience across all devices.",
        githubUrl: "https://github.com/Gathoni-K/Cluck-Co.",
        liveUrl: "https://cluck-co-v46b.vercel.app/",
        tech: ["Tailwind CSS", "Shadcn UI", "React", "TypeScript"],
        isTeam: false,
    },
    {
        id:2,
        title: "OtakuBoxd",
        image: "/inProgress.png",
        description: "",
        githubUrl: "https://github.com/Gathoni-K/OtakuBoxd",
        liveUrl: "OtakuBoxd is a comprehensive media tracking and review platform that enables users to curate personalized watchlists, log viewing progress, and publish reviews. Architected with React and TypeScript, the application leverages TanStack Query for highly optimized server-state management and seamless third-party API integration. The platform features a scalable, component-driven frontend designed in tandem with a robust Node.js and PostgreSQL backend to handle complex relational user data.",
        tech: ["React", "TypeScript", "Tailwind CSS", "Shadcn UI", "Tanstack Query", "Node.js", "Jikan API"],
        isTeam: false,
    },
    {
        id:3,
        title: "Library Management System",
        image: "/library.png",
        description: "A RESTful backend API built with Node.js, Express and TypeScript, backed by a PostgreSQL database hosted on Supabase. The API handles full CRUD operations across four resources — books, members, loans and fines — with business logic covering real library workflows such as issuing books, tracking active and overdue loans, and calculating fines at a fixed daily rate. Data access is managed through Drizzle ORM for type-safe querying, with a central error handling middleware ensuring consistent API responses across all endpoints.",
        githubUrl: "https://github.com/Gathoni-K/database-learning/tree/master/libraryDatabase",
        liveUrl: "",
        tech: ["Node.js", "Express", "PostgreSQL", "Supabase", "Postman", "Drizzle ORM"],
        isTeam: false,
    },

    {
        id:4,
        title: "AniTrack",
        image: "/Anime.png",
        description: "AniTrack is a dynamic frontend application engineered to consume the Jikan REST API, delivering a seamless and personalized media tracking experience. Built with React and TypeScript, the platform features real-time search functionality, responsive UI updates, and client-side data persistence via Local Storage. By implementing a strict, component-driven architecture with CSS Modules, I architected a highly efficient global state management system to handle complex user interactions and list mutations.",
        githubUrl: "https://github.com/Gathoni-K/anime-watchlist",
        liveUrl: "https://anime-watchlist-seven.vercel.app",
        tech: ["CSS Modules", "React", "TypeScript", "Jikan API"],
        isTeam: false,
    },
    {
        id:4,
        title: "WeatherWatch",
        image: "/WeatherWatch.png",
        description: "WeatherWatch is a dynamic client-side dashboard engineered to deliver real-time meteorological data and extended forecasts via the OpenWeatherMap API. Built with vanilla JavaScript, HTML, and CSS3, the application processes complex JSON payloads to dynamically render current conditions alongside a 5-day predictive outlook. By implementing robust asynchronous logic (async/await) and comprehensive error handling, I architected a fault-tolerant system that ensures seamless API communication and highly responsive UI updates.",
        githubUrl: "https://github.com/Gathoni-K/Weather-App",
        liveUrl: "https://weather-app-swart-psi-42.vercel.app/",
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
        description: "LogiGas is a smart LPG delivery platform leveraging location intelligence to streamline gas distribution and optimize dispatch efficiency. Serving as the Frontend Engineer, I architected an interactive geospatial dashboard using React, TypeScript, Leaflet.js, and OpenStreetMap to dynamically visualize delivery nodes and render optimized driver routes. By engineering robust route calculation logic and modular map components, I delivered a highly responsive UI that translates complex logistics into a seamless, actionable workflow for both drivers and dispatch teams",
        githubUrl: "https://github.com/Gathoni-K/LogiGas---GreenWells-Hackathon-",
        liveUrl: "https://logi-gas-green-wells-hackathon-u6yz.vercel.app/",
        tech: ["CSS modules", "React", "OpenStreetMaps API", "TypeScript", "Leaflet JS"],
        isTeam: true,
        myRole: "Frontend Engineer",

    },
    {
        id:5,
        title: "Canopy",
        image: "/Canopy.png",
        description: "Canopy is a comprehensive forest-monitoring platform designed to empower communities in reporting environmental threats while providing conservation teams with actionable, map-driven analytics. Serving as the Frontend Engineer, I architected the complete dashboard using React, TypeScript, React-Leaflet, and Tailwind CSS to implement dynamic geospatial rendering and data-driven charting. By engineering a modular component structure and robust real-time data patterns, I delivered a highly responsive visualization interface that translates complex environmental metrics into clear, actionable insights.",
        githubUrl: "https://github.com/Gathoni-K/Canopy",
        tech: ["TailwindCSS", "React", "Chart JS", "React-Leaflet", "Typescript"],
        isTeam: true,
        myRole: "Frontend Engineer"
    },
    {
        id:6,
        title: "DryPlan",
        image: "/eventDetails.jpeg",
        description: "DryPlan is an intelligent event management platform that integrates predictive meteorological data to deliver weather-aware planning insights. Serving as a Frontend Engineer, I architected the core Event Detail interface using React and CSS Modules, engineering dynamic visualizations for hourly weather timelines, precipitation probabilities, and automated contingency workflows. By implementing robust client-server integration across multiple forecasting APIs and meticulously managing complex loading and error states, I delivered a highly resilient and seamless user experience.",
        githubUrl: "https://github.com/OliveAlila/DryPlan/tree/main/frontend",
        tech: ["React", "CSS modules", "Rest APIs"],
        isTeam: true,
        myRole: "Frontend Engineer"
    },

        ]
    },


]