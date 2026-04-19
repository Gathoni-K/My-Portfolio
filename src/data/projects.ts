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
        description: "OtakuBoxd is a comprehensive media tracking and review platform that enables users to curate personalized watchlists, log viewing progress, and publish reviews. Architected with React and TypeScript, the application leverages TanStack Query for highly optimized server-state management and seamless third-party API integration. The platform features a scalable, component-driven frontend designed in tandem with a robust Node.js and PostgreSQL backend to handle complex relational user data.",
        githubUrl: "https://github.com/Gathoni-K/OtakuBoxd",
        liveUrl: "",
        tech: ["React", "TypeScript", "Tailwind CSS", "Shadcn UI", "Tanstack Query", "Node.js", "Jikan API"],
        isTeam: false,
    },
    {
        id:3,
        title: "Library Management System",
        image: "/library.png",
        description: "This project features a production-ready Library Management API designed for high reliability and seamless scalability. Built with Node.js, Express, and TypeScript, the system handles the complexities of a real-world library ecosystem—managing Books, Members, Loans, and Fines through a type-safe architecture powered by Drizzle ORM and PostgreSQL.Beyond core CRUD functionality, the backend implements sophisticated business logic to automate overdue tracking and daily fine accruals. To ensure the highest standards of security, I integrated Supabase Auth, providing robust user authentication and granular, role-based authorization for sensitive operations. The entire infrastructure is fully Dockerized, guaranteeing a consistent, portable environment that simplifies deployment and ensures the system performs reliably across any platform.",
        githubUrl: "https://github.com/Gathoni-K/database-learning/tree/master/libraryDatabase",
        liveUrl: "",
        tech: ["Node.js", "Express", "PostgreSQL", "Supabase", "Postman", "Drizzle ORM", "Docker", "Supabase Auth"],
        isTeam: false,
    },

    {
        id:4,
        title: "AniTrack",
        image: "/Anime.png",
        description: "AniTrack is a dynamic full-stack application that combines real-time anime discovery with an AI-powered recommendation engine. Built with React and TypeScript on the frontend, the platform consumes the Jikan REST API for live anime data and integrates a serverless backend architecture on Vercel to securely host SenpAI — a context-aware AI assistant powered by the Gemini API.The application features real-time search functionality, client-side data persistence via Local Storage, and a conversational AI layer that uses function calling to fetch and synthesize live anime data before responding to the user. The serverless backend manages API key security, CORS handling, and the full AI tool-use loop — from the initial prompt to the tool handoff and final response. Built with a strict component-driven architecture using CSS Modules and a scalable separation of concerns across types, tool definitions, and agent logic.",
        githubUrl: "https://github.com/Gathoni-K/anime-watchlist",
        liveUrl: "https://anitrack-senpai.vercel.app/",
        tech: ["CSS Modules", "React", "TypeScript", "Jikan API", "Gemini API", "Vercel Serverless Function" ],
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
        title: "BuildLink",
        image: "/buildLink.png",
        description: "BuildLink Kenya is a professional networking and learning platform purpose-built for Kenya's built environment sector — connecting architecture students, interior designers, construction workers, and industry mentors in one community-driven space. Think LinkedIn meets Reddit, designed specifically for the construction and design industry.As a volunteer Frontend Engineer, I contribute directly to the platform's live production codebase — diagnosing real bugs, shipping fixes, and building new features alongside an active development team.Contributions so far:Diagnosed and resolved a broken authentication flow, restoring seamless user login and session management across the platform. Currently developing additional frontend features within the existing React and TypeScript architecture",
        githubUrl: "https://github.com/buildlink-org/buildlink/tree/grace",
        liveUrl: "https://buildlink.co.ke/",
        tech: ["React", "Tailwind CSS", "Shadcn UI", "Typescript" ],
        isTeam: true,
        myRole: " Frontend Engineer (Volunteer)",

    },
            {
        id:5,
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
        id:6,
        title: "Canopy",
        image: "/Canopy.png",
        description: "Canopy is a comprehensive forest-monitoring platform designed to empower communities in reporting environmental threats while providing conservation teams with actionable, map-driven analytics. Serving as the Frontend Engineer, I architected the complete dashboard using React, TypeScript, React-Leaflet, and Tailwind CSS to implement dynamic geospatial rendering and data-driven charting. By engineering a modular component structure and robust real-time data patterns, I delivered a highly responsive visualization interface that translates complex environmental metrics into clear, actionable insights.",
        githubUrl: "https://github.com/Gathoni-K/Canopy",
        tech: ["TailwindCSS", "React", "Chart JS", "React-Leaflet", "Typescript"],
        isTeam: true,
        myRole: "Frontend Engineer"
    },
    {
        id:7,
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