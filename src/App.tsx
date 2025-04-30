import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="grid grid-cols-12 grid-rows-8 gap-4 h-screen w-[100vw] border border-red-500">
                <div className="flex justify-center items-center col-start-11 col-span-2 row-span-2 border border-blue-500">
                     <div className="bg-yellow-300 w-2/3 aspect-[1/1] rounded-sm"></div>
                </div>
                <div className="flex flex-col justify-end col-start-2 col-span-5 row-start-2 row-span-2 border border-blue-500">
                    <div className="flex flex-row justify-around px-4 gap-x-4 overflow-hidden">
                        <div className="bg-pink-500 basis-1/3 aspect-[1/1] max-w-[250px] rounded-sm"></div>
                        <div className="bg-pink-500 basis-1/3 aspect-[1/1] max-w-[250px] rounded-sm"></div>
                        <div className="bg-pink-500 basis-1/3 aspect-[1/1] max-w-[250px] rounded-sm"></div>
                    </div>  
                    <div className="bg-yellow-900 w-full h-1/11 flex-shrink-0 rounded-sm"></div>
                </div>
                <div className="flex flex-col justify-end col-start-2 col-span-9 row-start-6 row-span-2 border border-blue-500">
                <div className="flex flex-row justify-around px-4 gap-x-4 overflow-hidden">
                        <div className="bg-pink-500 basis-1/3 aspect-[1/1] max-w-[250px] rounded-sm"></div>
                        <div className="bg-pink-500 basis-1/3 aspect-[1/1] max-w-[250px] rounded-sm"></div>
                        <div className="bg-pink-500 basis-1/3 aspect-[1/1] max-w-[250px] rounded-sm"></div>
                    </div>     
                    <div className="bg-yellow-900 w-full h-1/11 flex-shrink-0 rounded-sm"></div>
                </div>
                <div className="flex flex-col justify-end col-start-5 col-span-7 row-start-4 row-span-2 border border-blue-500">
                    <div className="flex flex-row justify-around px-4 gap-x-4 overflow-hidden">
                        <div className="bg-pink-500 basis-1/3 aspect-[1/1] max-w-[250px] rounded-sm"></div>
                        <div className="bg-pink-500 basis-1/3 aspect-[1/1] max-w-[250px] rounded-sm"></div>
                        <div className="bg-pink-500 basis-1/3 aspect-[1/1] max-w-[250px] rounded-sm"></div>
                    </div>     
                    <div className="bg-yellow-900 w-full h-1/11 flex-shrink-0 rounded-sm"></div>
                </div>
            </div>
        </>
    );
}

export default App;
