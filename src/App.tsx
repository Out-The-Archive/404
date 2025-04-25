import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react"
import "./App.css";
import bee from "./bee.png";

function App() {

    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });

    const [facingRight, setFacingRight] = useState(false);
    const prevMouseX = useRef(mousePosition.x);

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            const dx = e.clientX - prevMouseX.current;
            if (dx > 0) setFacingRight(true);
            else if (dx < 0) setFacingRight(false);
            prevMouseX.current = e.clientX;
            setMousePosition({ x: e.clientX, y: e.clientY });
        }

        window.addEventListener("mousemove", mouseMove)

        return () => {
            window.removeEventListener("mousemove", mouseMove)
        }

    }, [])

    const varients = {
        default: {
            x: facingRight ? mousePosition.x - 32 : mousePosition.x,
            y: facingRight ? mousePosition.y : mousePosition.y,
            scaleX: facingRight ? 1 : -1
        }
    }

    return (
        <>
            <div>
            <motion.img
                src={bee}
                alt="Bee"
                className="h-[32px] w-[32px] fixed top-0 left-0"
                variants={varients}
                animate="default"
            /> 
                <h1>Hello World</h1>
            </div>
        </>
    );
}

export default App;
