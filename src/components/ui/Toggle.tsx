import { FaArrowRightArrowLeft } from "react-icons/fa6";

interface ToggleProps {
    isDark: boolean;
    setIsDark: (value: boolean) => void;
    leftLabel: string;
    rightLabel: string;
    leftActiveColor?: string;
    rightActiveColor?: string;
    inactiveColor?: string;
    
    
}


const Toggle = ({
    isDark,
    setIsDark,
    leftLabel,
    rightLabel,
    leftActiveColor,
    rightActiveColor,
    inactiveColor,
    
    
}: ToggleProps) => {
    return (
        <div>
            <button onClick={()=> setIsDark(!isDark)}
                className="flex  gap-2 md:gap-4 items-center font-mono">
                <span className={!isDark ? leftActiveColor : inactiveColor}>
                    {leftLabel}
                </span>

                <span>
                    <FaArrowRightArrowLeft 
                    />
                </span>

                <span className={isDark ? rightActiveColor : inactiveColor}>
                    {rightLabel}
                </span>

            </button>
        </div>
    )
}

export default Toggle