import { useState } from "react";

function FavCo(){
    // let color = 'red';
 const [color,setColor] =  useState('red')
    return <> 
    <h1>my fav color is {color} </h1>
    <button onClick={() => { setColor('blue') }}> change color</button>
    </>


}


export default FavCo;