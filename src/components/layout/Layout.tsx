import NavBar from "./NavBar";
import Footer from "./Footer";
import type { ReactNode } from "react";
import { useState, useEffect } from "react";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({children}: LayoutProps) => {

    const [isDark, setIsDark] = useState<boolean>(false);
    //state for handling our theme toggling

    useEffect(()=>{
        document.documentElement.classList.toggle("dark", isDark);
    }, [isDark]);

    return (
        <div className="bg-neutral-300 dark:bg-gray-950">
            <NavBar isDark={isDark} setIsDark={setIsDark}/>
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
    }

export default Layout