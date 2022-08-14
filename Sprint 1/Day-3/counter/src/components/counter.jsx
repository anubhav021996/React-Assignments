import { useState } from "react";

export function Counter(){
    const [counter,setcounter] = useState(0);
    const change = (n) => {
        setcounter(counter+n);
    }
    return(
        <>
        {/* <h1>Counter: {counter}</h1> */}
        {counter%2==0 ? (<h1 style={{color: "red"}}>Counter: {counter}</h1>) : (<h1 style={{color: "green"}}>Counter: {counter}</h1>)}
        <button onClick={() => {change(1);}}>Add</button>
        <button onClick={() => {
            if(counter>=1){
                change(-1);    
            }
            }}>Subtract</button>
            <button onClick={()=>{
                setcounter(counter*2);
            }}>Double</button>
        </>
    );
}