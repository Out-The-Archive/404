import { useState } from "react";
import { Asteri0, Asteri1, Asteri2, Astina0, Astina1, Astina2, Aston0, Aston1, Aston2, Astren0, Astren1, Astren2, Astrid0, Astrid1, Astrid2, Astro0, Astro1, Astro2, Astrota0, Astrota1, Astrota2, Rick0, Rick1, Rick2 } from "./flowers";

type flowerType = 'Astrota' | 'Asta' | 'Asteri' | 'Aston' | 'Astro' | 'Astina' | 'Astrid' | 'Rick';

type FlowerPotProps = {
 FlowerType: flowerType   
}

const flowers = {
    'Astrota' : [<Astrota0/>, <Astrota1/>, <Astrota2/>],
    'Asta' : [<Astren0/>, <Astren1/>, <Astren2/>],
    'Asteri' : [<Asteri0/>, <Asteri1/>, <Asteri2/>],
    'Aston' : [<Aston0/>, <Aston1/>, <Aston2/>],
    'Astro' : [<Astro0/>, <Astro1/>, <Astro2/>],
    'Astina' : [<Astina0/>, <Astina1/>, <Astina2/>],
    'Astrid' : [<Astrid0/>, <Astrid1/>, <Astrid2/>],
    'Rick' : [<Rick0/>, <Rick1/>, <Rick2/>]
    

}

export default function FlowerPot({FlowerType}: FlowerPotProps){
    const [count, setCount] = useState(0);
    return (
        <button onClick={()=>setCount(prevCount => (prevCount + 1) % 3)}>
            {
                (count == 0) && (<div>{flowers[FlowerType][0]}</div>)
            }
            {
                (count == 1) && (<div>{flowers[FlowerType][1]}</div>)
            }
            {
                (count == 2) && (<div>{flowers[FlowerType][2]}</div>)
            }
        </button>
    );
}