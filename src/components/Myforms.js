import { useState } from "react";

function Form(){

// const [name , setName] = useState("");
// const [age , setAge] = useState("");
// const [city , setCity] = useState("");

const [inputs , setInputs] = useState({phone:"+91", city:"goa"});

// how to get input value using react . so use event listener " onchange"
// target targets the value you enter in the input
   function handlesub(e){
    e.preventDefault();// prevents the browser refresh
    console.log('form submitted')
    console.log('current state ', inputs)
   }
   function handlechg(e){
   const name =  e.target.name
   const value = e.target.value
    setInputs((prestate) =>{ return {...prestate,[name] : value}})
   }
   
   return <form onSubmit={handlesub}>
<label>Enter your name: <input type="text" name="name" onChange={handlechg}></input></label><br></br>
 <label>Enter your age: <input type="text" name="age" onChange={handlechg}></input></label><br></br>
<label>Enter your city: <select name= "city" onChange={handlechg}>
    <option value="">select</option>
    <option value="yanam" >yanam</option>
    <option value="Mahe">Mahe</option>
     <option value="Goa">Goa</option>
</select>
</label><br></br>

<label>Enter your phn num: <input type="text"  name= "phone" onChange={handlechg} value={inputs.phone}></input></label><br></br>
<label> Enter about you :<textarea value=" Im a student " onChange={handlechg} ></textarea></label>
 <input type="submit" value="submit form"/>
    </form>
}
export default Form;