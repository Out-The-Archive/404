import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import "./App.css";
import bee from "./bee.png";
// import HomeButton from "./components/HiveHomeButton";
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

const currentAster = Math.floor(Math.random() * 9);

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
                <div className="absolute w-[70%] h-auto top-[27%] left-[15%]">
                    <AsterComponent
                        Aster={asters[currentAster].name as AsterName}
                    />
                </div>
                <div className="absolute flex items-center justify-center top-[80%] left-[calc(50%-112.335px)]">
                    <span className="-rotate-20 m-2 text-8xl font-black text-[#DF6431]">4</span>
                    <span className="rotate-10 m-2 text-8xl font-black text-[#EEBCBE]">0</span>
                    <span className="rotate-65 m-2 text-8xl font-black text-[#449E5B]">4</span>
                </div> 
            </div>
            <div className="hidden md:grid grid-cols-12 grid-rows-8 gap-4 h-screen w-screen bg-[#282828]">
                {/* <div className="flex justify-center items-start col-start-11 col-span-2 row-span-2 border border-blue-500 overflow-hidden">
                    <div className="bg-yellow-300 w-2/3 aspect-[1/1] rounded-sm">
                        <HomeButton />
                    </div>
                </div> */}
                <div className="flex flex-col justify-end col-start-2 col-span-6 row-start-1 row-span-3">
                    <div className="flex flex-row justify-around px-4 gap-x-4 overflow-hidden">
                        <div className="basis-1/4 aspect-square max-w-[160px] rounded-sm flex flex-col items-center justify-end">
                            <FlowerPot FlowerType="Astina" />
                        </div>
                        <div className="basis-3/5 aspect-[2] max-w-[384px] rounded-sm flex flex-col items-center justify-end">
                            <p className="text-white font-bold text-[100px] leading-none">
                                404
                            </p>
                        </div>
                        <div className="basis-1/4 aspect-square max-w-[160px] rounded-sm flex flex-col items-center justify-end">
                            <FlowerPot FlowerType="Asteri" />
                        </div>
                    </div>
                    <div className="bg-yellow-900 w-full h-[20px] flex-shrink-0 rounded-sm"></div>
                </div>
                <div className="flex flex-col justify-end col-start-2 col-span-6 row-start-6 row-span-2">
                    <div className="flex flex-row justify-around px-4 gap-x-4">
                        <div className="basis-1/3 aspect-square max-w-[160px] rounded-sm flex flex-col items-center justify-end">
                            <FlowerPot FlowerType="Astren" />
                        </div>
                        <div className="basis-1/3 aspect-square max-w-[160px] rounded-sm flex flex-col items-center justify-end">
                            <FlowerPot FlowerType="Astrota" />
                        </div>
                        <div className="basis-1/3 aspect-square max-w-[160px] rounded-sm flex flex-col items-center justify-end">
                            <FlowerPot FlowerType="Astrid" />
                        </div>
                    </div>
                    <div className="bg-yellow-900 w-full h-[20px] flex-shrink-0 rounded-sm"></div>
                </div>
                <div className="flex flex-col justify-end col-start-7 col-span-5 row-start-3 row-span-3">
                    <div className="flex flex-row justify-around px-4 gap-x-4">
                        <div className="basis-1/3 aspect-square max-w-[160px] rounded-sm flex flex-col items-center justify-end">
                            <FlowerPot FlowerType="Aston" />
                        </div>
                        <div className="basis-1/3 aspect-square max-w-[160px] rounded-sm flex flex-col items-center justify-end">
                            <FlowerPot FlowerType="Astro" />
                        </div>
                        <div className="basis-1/3 aspect-square max-w-[160px] rounded-sm flex flex-col items-center justify-end">
                            <FlowerPot FlowerType="Rick" />
                        </div>
                    </div>
                    <div className="bg-yellow-900 w-full h-[20px] flex-shrink-0 rounded-sm"></div>
                </div>
            </div>
            <motion.img
                src={bee}
                alt="Bee"
                className="h-[50px] w-[50px] fixed top-0 left-0 hidden md:block"
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
        </>
    );
}
