import { useEffect, useState } from "react";

export const Stopwatch = ({init,end}) => {
    const [timer,setTimer]= useState(init);
    useEffect(()=>{
        const id = setInterval(() => {
            console.log(timer);
            setTimer((prev)=>{
                if(prev>=end){
                    clearInterval(id);
                    return end;
                }
                return prev+1;
            })  
        }, 500);
        
        return (()=> {
            console.log(timer);
        })
    },[])
    
    return <h1>Timer: {timer}</h1>
    
}




// useEffect(()=>{
//     if(timer>0){
//         setTimeout(()=>setTimer(timer-1),1000);
//     }
// },[timer])