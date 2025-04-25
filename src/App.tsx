import { useState, useEffect } from "react";
import { motion } from "motion/react"
import "./App.css";

function App() {

    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });
    
    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
        }

        window.addEventListener("mousemove", mouseMove)

        return () => {
            window.removeEventListener("mousemove", mouseMove)
        }

    }, [])

    return (
        <>
            <motion.div 
                className="bg-black h-[32px] w-[32px] fixed top-0 left-0"
                transition={{
                    type: 'spring',
                    damping: 65,
                }}
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16
                }}  
            />
        </>
    );
}

export default App;
