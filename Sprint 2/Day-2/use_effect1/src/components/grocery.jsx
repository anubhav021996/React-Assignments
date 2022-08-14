import axios from "axios";
import { useEffect, useState } from "react";
import { Groceryinput } from "./groceryinput";
import { Grocerylist } from "./grocerylist";

export const Grocery= () => {
    const[list,setList]= useState([]);
    const[page,setPage]= useState(1);
    useEffect(()=>{
        additems();
    },[page]);

    const additems=()=>{
        axios.get(`http://localhost:3001/groceries?_limit=3&_page=${page}`).then((res)=>{
            setList(res.data);
        });
    }

    const pageChange= (N) => {
        setPage(page+N);
    }

    return(
        <>
            <Groceryinput xyz={additems}/>
            {list.map((e) => (
                <Grocerylist value={e} key={e.id}/>
            ))}
            <button onClick={()=>{
                if(page>1){
                    pageChange(-1);
                }
            }}>Prev</button>
            <button onClick={()=>{
                if(page<=Math.ceil(list.length/page)){
                    pageChange(1);
                }
            }}>Next</button>
        </>           
    )
};