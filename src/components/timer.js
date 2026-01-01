import { useEffect , useState } from "react"

function Timer(){

    const [count , setcount]=useState(0);
    useEffect(() => {
        // checkCount()
        // setcount(1)
        setTimeout(() =>{
            setcount((prestate) => {return  prestate+1})
        },1000)
    })
    // useEffect is used for time related functions
 function checkCount(){
    if (count> 10 ){
        setcount(1);
    }
 } 

    function update(){
        setcount((prestate) => {return prestate+1})
    }
     return <>
     <h1>i have rendered {count} times</h1>
     <button onClick={update}> inc count</button>
     </> 
}
export default Timer;