import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import "./App.css";
import bee from "./bee.png";
import HomeButton from "./components/HiveHomeButton";
import FlowerPot from "./components/flowerpot";

const asters = [
    {   
        key: 0,
        name: 'Asta',
        message: 'hi im Asta!',
        src: 'public/Asta.svg'
    },
    {   
        key: 1,
        name: 'Asteri',
        message: 'hi im Asteri!',
        src: 'public/Asteri.svg'
    },
    {   
        key: 2,
        name: 'Astina',
        message: 'hi im Astina!',
        src: 'public/Astina.svg'
    },
    {   
        key: 3,
        name: 'Aston',
        message: 'hi im Aston!',
        src: 'public/Aston.svg'
    },
    {   
        key: 4,
        name: 'Astren',
        message: 'hi im Astren!',
        src: 'public/Astren.svg'
    },
    {   
        key: 5,
        name: 'Astrid',
        message: 'hi im Astrid!',
        src: 'public/Astrid.svg'
    },
    {   
        key: 6,
        name: 'Astro',
        message: 'hi im Astro!',
        src: 'public/Astro.svg'
    },
    {   
        key: 7,
        name: 'Astrota',
        message: 'hi im Astrota!',
        src: 'public/Astrota.svg'
    },
    {   
        key: 8,
        name: 'Rick',
        message: 'hi im Rick!',
        src: 'public/Rick.svg'
    },

]

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
            <div className="md:hidden flex justify-center items-center flex-col h-full">
                <img className="" src={asters[currentAster].src} alt={asters[currentAster].name}/>
                <h1 className="m-2 text-5xl">Error 404</h1>
                <span className="m-2 text-xl">{asters[currentAster].message}</span>
            </div>
            <div className="hidden md:grid grid-cols-12 grid-rows-8 gap-4 h-screen w-[100vw] border border-red-500">
                <div className="flex justify-center items-start col-start-11 col-span-2 row-span-2 border border-blue-500 overflow-hidden">
                    <div className="bg-yellow-300 w-2/3 aspect-[1/1] rounded-sm">
                        {" "}
                        <HomeButton />
                    </div>
                </div>
                <div className="flex flex-col justify-end col-start-2 col-span-6 row-start-1 row-span-3 border border-blue-500">
                    <div className="flex flex-row justify-around px-4 gap-x-4 overflow-hidden">
                        <div className="bg-pink-500 basis-1/4 aspect-square max-w-[160px] rounded-sm flex flex-col justify-end">
                            <div className="w-8">
                                <FlowerPot FlowerType="Astrota"/>
                            </div>
                        </div>
                        <div className="bg-pink-500 basis-3/5 aspect-[2] max-w-[384px] rounded-sm"></div>
                        <div className="bg-pink-500 basis-1/4 aspect-square max-w-[160px] rounded-sm"></div>
                    </div>
                    <div className="bg-yellow-900 w-full h-[20px] flex-shrink-0 rounded-sm"></div>
                </div>
                <div className="flex flex-col justify-end col-start-2 col-span-6 row-start-6 row-span-2 border border-blue-500">
                    <div className="flex flex-row justify-around px-4 gap-x-4 overflow-hidden">
                        <div className="bg-pink-500 basis-1/3 aspect-square max-w-[160px] rounded-sm flex flex-col justify-end">
                            <FlowerPot FlowerType='Astrota'/>
                        </div>
                        <div className="bg-pink-500 basis-1/3 aspect-square max-w-[160px] rounded-sm flex flex-col justify-end">
                        </div>
                        <div className="bg-pink-500 basis-1/3 aspect-square max-w-[160px] rounded-sm"></div>
                    </div>
                    <div className="bg-yellow-900 w-full h-[20px] flex-shrink-0 rounded-sm"></div>
                </div>
                <div className="flex flex-col justify-end col-start-7 col-span-5 row-start-3 row-span-3 border border-blue-500">
                    <div className="flex flex-row justify-around px-4 gap-x-4 overflow-hidden">
                        <div className="bg-pink-500 basis-1/3 aspect-square max-w-[160px] rounded-sm"></div>
                        <div className="bg-pink-500 basis-1/3 aspect-square max-w-[160px] rounded-sm"></div>
                        <div className="bg-pink-500 basis-1/3 aspect-square max-w-[160px] rounded-sm"></div>
                    </div>
                    <div className="bg-yellow-900 w-full h-[20px] flex-shrink-0 rounded-sm"></div>
                </div>
            </div>
            <motion.img
                src={bee}
                alt="Bee"
                className="h-[50px] w-[50px] fixed top-0 left-0"
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
