import { useState } from "react";
import { Astrota0, Astrota1, Astrota2 } from "./flowers";

type flowerType = 'Astrota' | 'Asta' | 'Asteri' | 'Aston' | 'Astina' | 'Astrid' | 'Rick';

type FlowerPotProps = {
 FlowerType: flowerType   
}

const flowers = {
    'Astrota' : [<Astrota0/>, <Astrota1/>, <Astrota2/>]
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