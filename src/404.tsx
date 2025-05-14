import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import "./App.css";
import bee from "./bee.png";
import FlowerPot from "./components/flowerpot";
import AsterComponent from "./components/aster";
import type { Aster as AsterName } from "./components/aster";

const asters = [
    {
        name: "Asteri",
        message: "hi im Asteri!",
    },
    {
        name: "Astina",
        message: "hi im Astina!",
    },
    {
        name: "Aston",
        message: "hi im Aston!",
    },
    {
        name: "Astren",
        message: "hi im Astren!",
    },
    {
        name: "Astrid",
        message: "hi im Astrid!",
    },
    {
        name: "Astro",
        message: "hi im Astro!",
    },
    {
        name: "Astrota",
        message: "hi im Astrota!",
    },
    {
        name: "Rick",
        message: "hi im Rick!",
    },
];

export default function Error404() {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0,
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
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    return (
        <div className="relative h-screen w-screen bg-[#282828] overflow-hidden">
            {/* Top Left Corner */}
            <div className="absolute left-[10%] top-[35%]">
                <div className="relative">
                    <div className="absolute bottom-0 -translate-x-16 -translate-y-[120px] pointer-events-none z-10">
                        <AsterComponent Aster="Aston" size={8} scale={0.3} />
                    </div>
                    <div className="absolute bottom-0 translate-x-40 -translate-y-[180px] rotate-45">
                        <AsterComponent Aster="Astina" size={8} scale={0.1} />
                    </div>
                    <FlowerPot FlowerType="Aston" />
                </div>
            </div>

            {/* Top Center-Right */}
            <div className="absolute left-[50%] top-[25%]">
                <div className="relative">
                    <div className="absolute bottom-0 translate-x-5 -translate-y-[90px] pointer-events-none z-10">
                        <AsterComponent Aster="Rick" size={8} scale={0.3} />
                    </div>
                    <FlowerPot FlowerType="Rick" />
                </div>
            </div>

            {/* Top Right Corner */}
            <div className="absolute left-[85%] top-[30%]">
                <div className="relative">
                    <div className="absolute bottom-0 -translate-x-28 -translate-y-[75px] pointer-events-none z-10">
                        <AsterComponent Aster="Asteri" size={8} scale={0.3} />
                    </div>
                    <FlowerPot FlowerType="Asteri" />
                </div>
            </div>

            {/* Center Left */}
            <div className="absolute left-[5%] top-[80%]">
                <div className="relative">
                    <div className="absolute bottom-0 translate-x-10 -translate-y-[100px] pointer-events-none z-10">
                        <AsterComponent Aster="Astina" size={8} scale={0.3} />
                    </div>
                    <FlowerPot FlowerType="Astina" />
                </div>
            </div>

            {/* Center Bottom */}
            <div className="absolute left-[55%] top-[100%] transform -translate-x-1/2">
                <div className="relative">
                    <div className="absolute bottom-0 -translate-x-20 -translate-y-[100px] pointer-events-none z-10">
                        <AsterComponent Aster="Astro" size={8} scale={0.3} />
                    </div>
                    <FlowerPot FlowerType="Astro" />
                </div>
            </div>

            {/* Bottom Right Corner */}
            <div className="absolute left-[85%] top-[85%]">
                <div className="relative">
                    <div className="absolute bottom-0 -translate-y-[60px] pointer-events-none z-10">
                        <AsterComponent Aster="Astrid" size={8} scale={0.3} />
                    </div>
                    <FlowerPot FlowerType="Astrid" />
                </div>
            </div>


            {/* 404 Text */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1 className="text-white text-9xl font-bold">404</h1>
            </div>

            {/* Bee */}
            <motion.img
                src={bee}
                alt="Bee"
                className="h-[50px] w-[50px] fixed top-0 left-0"
                style={{pointerEvents: "none"}}
                transition={{
                    type: "spring",
                    damping: 50,
                }}
                animate={{
                    x: facingRight ? mousePosition.x - 32 : mousePosition.x,
                    y: facingRight ? mousePosition.y : mousePosition.y,
                    scaleX: facingRight ? 1 : -1,
                }}
            />
        </div>
    );
} 