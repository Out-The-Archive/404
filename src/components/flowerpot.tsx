import { useState } from "react";

export default function FlowerPot(){
    const [count, setCount] = useState(0);
    return (
        <button onClick={()=>setCount(prevCount => (prevCount + 1) % 3)}>
            {
                (count == 0) && (<div>state 0</div>)
            }
            {
                (count == 1) && (<div>state 1</div>)
            }
            {
                (count == 2) && (<div>state 2</div>)
            }
        </button>
    );
}