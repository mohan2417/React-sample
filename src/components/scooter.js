import { useState } from "react";

function Scoot(){
//     const [color , setColor] = useState("red")
//  const [Brand, setBrand] = useState("Activa")
const [scoot, setscoot] = useState( {color:"red", Brand:"activa"})
function updtcolor(){
    setscoot((preState) =>{
        return{...preState , color:"blue"}
        })
}
    return <>
    <h1> My scooter </h1>
    <p>color : {scoot.color}</p>
    <p>Brand : {scoot.Brand}</p>
    <button onClick={updtcolor}> change color </button>
    </>
}

export default Scoot;
