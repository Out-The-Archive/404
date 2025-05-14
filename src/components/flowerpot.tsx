import { useState } from "react";
import {
    Asteri0,
    Asteri1,
    Asteri2,
    Astina0,
    Astina1,
    Astina2,
    Aston0,
    Aston1,
    Aston2,
    Astren0,
    Astren1,
    Astren2,
    Astrid0,
    Astrid1,
    Astrid2,
    Astro0,
    Astro1,
    Astro2,
    Astrota0,
    Astrota1,
    Astrota2,
    Rick0,
    Rick1,
    Rick2,
} from "../assets/flowers";

type flowerType =
    | "Astrota"
    | "Astren"
    | "Asteri"
    | "Aston"
    | "Astro"
    | "Astina"
    | "Astrid"
    | "Rick";

type FlowerPotProps = {
    FlowerType: flowerType;
};

const flowers = {
    Astrota: [<Astrota0 />, <Astrota1 />, <Astrota2 />],
    Astren: [<Astren0 />, <Astren1 />, <Astren2 />],
    Asteri: [<Asteri0 />, <Asteri1 />, <Asteri2 />],
    Aston: [<Aston0 />, <Aston1 />, <Aston2 />],
    Astro: [<Astro0 />, <Astro1 />, <Astro2 />],
    Astina: [<Astina0 />, <Astina1 />, <Astina2 />],
    Astrid: [<Astrid0 />, <Astrid1 />, <Astrid2 />],
    Rick: [<Rick0 />, <Rick1 />, <Rick2 />],
};

export default function FlowerPot({ FlowerType }: FlowerPotProps) {
    const [count, setCount] = useState(0);
    return (
        <button
            className="w-auto h-auto hover:cursor-pointer relative"
            onClick={() => setCount((prevCount) => (prevCount + 1) % 3)}
        >
            <div className="absolute bottom-0 left-0 right-0">
                {count == 0 && <>{flowers[FlowerType][0]}</>}
                {count == 1 && <>{flowers[FlowerType][1]}</>}
                {count == 2 && <>{flowers[FlowerType][2]}</>}
            </div>
        </button>
    );
}
