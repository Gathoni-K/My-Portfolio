import { useState, useEffect } from "react";
import { TfiArrowCircleUp } from "react-icons/tfi";

const ToTopButton = () => {

    const [visible, setVisible] = useState<boolean>(false);
    // state responsible for setting visibility of our button

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        // create a variable scrolled that stores how far in px we scroll from the top of our screen
        if (scrolled > 300) {
            // if we scroll more than 400px from top, then the button becomes visible
            setVisible(true);
        } else if(scrolled <= 300) {
            setVisible(false);
        }
    }
    // block of code handling the visibility

    const scrollToTop = () => {
        window.scrollTo({
            // method that scrolls window to a specific absolute position in the document, in this case, to the very top.
            top: 0,
            behavior: "smooth",

        });
    };
    // block of code responsible for our button's behavior

        useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
     // adds an event listener to our window, setting the event we are to listen for as scroll, function to 
    // be called is 'toggleVisible'
    return () => window.removeEventListener("scroll", toggleVisible);
    // our cleanup function
    // will remove the scroll listener
}, []);
    // useEffect is necessary to prevent memory leakage, without it, our component will re-render every time state changes, causing
    // our website to be buggy.

    

    return (
        <div>

            <button
            onClick={scrollToTop}
            // sets behavior of button, on clicking, calls the function 'scrollToTop'
            style={{display: visible ? "inline" : "none"}}
            // when the display is set to visible, the button's style is set to inline else it is set to none, not visible
            className="fixed z-50 bottom-6 right-6 rounded-full bg-yellow-400 dark:bg-emerald-400
            hover:bg-cyan-400 dark:hover:bg-cyan-400 p-3 text-3xl text-stone-50 hover:animate-pulse 
            drop-shadow-[0_0_10px_#facc15] dark:hover:bg-yellow-400 dark:drop-shadow-[0_0_10px_#0ff2fa]
            "
            >
                <TfiArrowCircleUp />
            </button>
            
        </div>
    )
}

export default ToTopButton