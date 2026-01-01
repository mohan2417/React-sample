import { useState } from "react"

function List(){
    const [list, setList] = useState([]);
   const [count, setcount] = useState(1);

   function additem(){
    const itname = 'item'+ count;
    setList((preState)=> {return[...preState,itname]})
    setcount((preState) => {return preState+1})   
}
   return <>
     <h1>My list </h1>
     <button onClick={additem}>ADD Item </button>
    <ul>{list.map((el , index )=> <li key={index} >{el}</li>)}   
    </ul>
    </> 
}
export default List; 