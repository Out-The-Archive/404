import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import "./App.css";
import bee from "./bee.png";
// import HomeButton from "./components/HiveHomeButton";
import FlowerPot from "./components/flowerpot";
import AsterComponent from "./components/aster";
import MobileLetter from "./components/MobileLetter";
import type { Aster as AsterName } from "./components/aster";

const asters = [
    {
        name: "Asteri",
        color1: "#DF6431",
        color2: "#DF6431",
        color3: "#DF6431",
    },
    {
        name: "Astina",
        color1: "#149334",
        color2: "#149334",
        color3: "#149334",
    },
    {
        name: "Aston",
        color1: "#99BBD3",
        color2: "#99BBD3",
        color3: "#99BBD3",
    },
    {
        name: "Astren",
        color1: "#FFFFFF",
        color2: "#FFFFFF",
        color3: "#FFFFFF",
        background1: "linear-gradient(#DF6431, #149334)",
        background2: "linear-gradient(#149334, #99BBD3)",
        background3: "linear-gradient(#99BBD3, #EEBCBE)",
    },
    {
        name: "Astrid",
        color1: "#EEBCBE",
        color2: "#EEBCBE",
        color3: "#EEBCBE",
    },
    {
        name: "Astro",
        color1: "#A49E9B",
        color2: "#A49E9B",
        color3: "#A49E9B",
    },
    {
        name: "Astrota",
        color1: "#DF6431",
        color2: "#EEBCBE",
        color3: "#449E5B",
    },
    {
        name: "Rick",
        color1: "#F4D326",
        color2: "#F4D326",
        color3: "#F4D326",
    },
];

const currentAster = Math.floor(Math.random() * 8);

export default function App() {
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
        <>
            <div className="md:hidden relative h-full bg-no-repeat bg-cover bg-center bg-[url(src/assets/MobileBg.svg)]">
                <div className="absolute h-auto top-[29%] left-1/2 -translate-x-1/2">
                    <AsterComponent
                        Aster={asters[currentAster].name as AsterName}
                        size={300}
                        scale={1}
                    />
                </div>
                <div className="absolute flex items-center justify-center top-[77.5%] left-[calc(50%-112.335px)]">
                    <MobileLetter
                        character="4"
                        color={asters[currentAster].color1}
                        background={asters[currentAster].background1}
                        rotation={-20}
                    />
                    <MobileLetter
                        character="0"
                        color={asters[currentAster].color2}
                        background={asters[currentAster].background2}
                        rotation={10}
                    />
                    <MobileLetter
                        character="4"
                        color={asters[currentAster].color3}
                        background={asters[currentAster].background3}
                        rotation={40}
                    />
                </div>
            </div>
            <div className="hidden md:block relative h-screen w-screen bg-[#FFFAF9] overflow-hidden">
                {/* Top Left Corner */}
                <div className="absolute left-[10%] top-[35%]">
                    <div className="relative">
                        <div className="absolute bottom-0 -translate-x-16 -translate-y-[120px] pointer-events-none z-10">
                            <AsterComponent
                                Aster="Aston"
                                size={125}
                                scale={1}
                            />
                        </div>
                        <div className="absolute bottom-0 translate-x-40 -translate-y-[180px] rotate-45">
                            <AsterComponent
                                Aster="Astina"
                                size={125}
                                scale={0.3}
                            />
                        </div>
                        <FlowerPot FlowerType="Aston" />
                    </div>
                </div>

                {/* Top Center-Right */}
                <div className="absolute left-[50%] top-[25%]">
                    <div className="relative">
                        <div className="absolute bottom-0 translate-x-5 -translate-y-[90px] pointer-events-none z-10">
                            <AsterComponent Aster="Rick" size={125} scale={1} />
                        </div>
                        <FlowerPot FlowerType="Rick" />
                    </div>
                </div>

                {/* Top Right Corner */}
                <div className="absolute left-[85%] top-[30%]">
                    <div className="relative">
                        <div className="absolute bottom-0 -translate-x-28 -translate-y-[75px] pointer-events-none z-10">
                            <AsterComponent
                                Aster="Asteri"
                                size={125}
                                scale={1}
                            />
                        </div>
                        <FlowerPot FlowerType="Asteri" />
                    </div>
                </div>

                {/* Center Left */}
                <div className="absolute left-[5%] top-[80%]">
                    <div className="relative">
                        <div className="absolute bottom-0 translate-x-10 -translate-y-[100px] pointer-events-none z-10">
                            <AsterComponent
                                Aster="Astina"
                                size={125}
                                scale={1}
                            />
                        </div>
                        <FlowerPot FlowerType="Astina" />
                    </div>
                </div>

                {/* Center Bottom */}
                <div className="absolute left-[55%] top-[100%] transform -translate-x-1/2">
                    <div className="relative">
                        <div className="absolute bottom-0 -translate-x-20 -translate-y-[100px] pointer-events-none z-10">
                            <AsterComponent
                                Aster="Astro"
                                size={125}
                                scale={1}
                            />
                        </div>
                        <FlowerPot FlowerType="Astro" />
                    </div>
                </div>

                {/* Bottom Right Corner */}
                <div className="absolute left-[85%] top-[85%]">
                    <div className="relative">
                        <div className="absolute bottom-0 -translate-y-[60px] pointer-events-none z-10">
                            <AsterComponent
                                Aster="Astrid"
                                size={125}
                                scale={1}
                            />
                        </div>
                        <FlowerPot FlowerType="Astrid" />
                    </div>
                </div>

                {/* 404 Center */}
                <div className="flex flex-col h-screen items-center justify-center">
                    <div className="relative flex items-center justify-center">
                        <div className="absolute -translate-y-1/4 h-[200px] w-[200px]">
                            {/* Inline Asterisk SVG*/}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="200"
                                height="200"
                                viewBox="0 0 200 200"
                                fill="none"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M142.734 161.12C146.033 164.419 151.381 164.419 154.68 161.12L160.652 155.148C163.951 151.849 163.951 146.501 160.652 143.203L129.962 112.512L99.4335 99.9016L111.805 130.19L142.734 161.12Z"
                                    fill="#99BBD3"
                                />
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M173.671 112.905C178.336 112.905 182.117 109.123 182.117 104.458V96.0119C182.117 91.347 178.336 87.5654 173.671 87.5654H130.268L99.7642 100.235L129.929 112.905H173.671Z"
                                    fill="#EEBCBE"
                                />
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M25.8566 112.905C21.1918 112.905 17.4102 109.123 17.4102 104.458V96.0119C17.4102 91.347 21.1918 87.5654 25.8566 87.5654H69.2595L99.7631 100.235L69.5981 112.905H25.8566Z"
                                    fill="#EEBCBE"
                                />
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M39.0116 57.3993C35.7131 54.1008 35.7131 48.7528 39.0116 45.4542L44.9842 39.4817C48.2827 36.1831 53.6307 36.1831 56.9292 39.4817L87.6197 70.1721L100.23 100.7L69.9415 88.3292L39.0116 57.3993Z"
                                    fill="#99BBD3"
                                />
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M56.9276 161.12C53.6291 164.419 48.2811 164.419 44.9825 161.12L39.01 155.148C35.7114 151.849 35.7114 146.501 39.01 143.203L69.7004 112.512L100.229 99.9016L87.8575 130.19L56.9276 161.12Z"
                                    fill="#449E5B"
                                />
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M160.651 57.3993C163.949 54.1008 163.949 48.7528 160.651 45.4542L154.678 39.4817C151.379 36.1831 146.031 36.1831 142.733 39.4817L112.042 70.1721L99.4319 100.7L129.721 88.3292L160.651 57.3993Z"
                                    fill="#449E5B"
                                />
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M87.0957 174.142C87.0957 178.807 90.8773 182.588 95.5422 182.588H103.989C108.653 182.588 112.435 178.807 112.435 174.142V130.739L99.7654 100.235L87.0957 130.4V174.142Z"
                                    fill="#DF6431"
                                />
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M87.0957 26.3283C87.0957 21.6634 90.8773 17.8818 95.5422 17.8818H103.989C108.653 17.8818 112.435 21.6634 112.435 26.3283V69.7311L99.7654 100.235L87.0957 70.0697V26.3283Z"
                                    fill="#DF6431"
                                />
                            </svg>
                        </div>

                        {/* Left 4 of the 404 */}
                        <div className="absolute -translate-x-56 translate-y-1/8">
                            <h1 className="text-[#DF6431] text-[300px] rotate-[-14.534deg] font-extrabold">
                                4
                            </h1>
                        </div>
                        {/* Right 4 of the 404 */}
                        <div className="absolute translate-x-56 translate-y-1/4">
                            <h1 className="text-[#449E5B] text-[300px] rotate-[90deg] font-extrabold">
                                4
                            </h1>
                        </div>
                        <span className="flex gap-4 text-5xl translate-y-[250px]">
                            <p className=" font-rylee">oh no!</p>
                            <p className="font-rylee-best">page not found!</p>
                        </span>
                    </div>
                </div>

                {/* Bee */}
                <motion.img
                    src={bee}
                    alt="Bee"
                    className="h-[50px] w-[50px] fixed top-0 left-0"
                    style={{ pointerEvents: "none" }}
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
        </>
    );
}
