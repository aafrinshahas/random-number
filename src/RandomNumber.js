import { useState } from "react";

function RandomNumber(){
let [number, setNumber] = useState(0)
function generateRandom(){
    var random = Math.floor(Math.random()*10) + 1;
    setNumber(random)
}

return(
    <div>
        <h1>{number}</h1>
        <button onClick={generateRandom}>Generate Random Number</button>
    </div>
)
}

export default RandomNumber;