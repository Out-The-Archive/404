import { useState, useEffect } from "react";
import { motion } from "motion/react"
import "./App.css";

function App() {

    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });

    const [beeDirection, setBeeDirection] = useState({
           
    })
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

    const varients = {
        default: {
            x: mousePosition.x,
            y: mousePosition.y
        }
    }

    return (
        <>
            <h1>Hello World</h1>
            <motion.div 
                className="bg-white h-[32px] w-[32px] fixed top-0 left-0"
                variants={varients}
                animate="default"
            />

        </>
    );
}

export default App;
