import { useState } from "react";
import { Groceryinput } from "./groceryinput";
import { Grocerylist } from "./grocerylist";

export const Grocery= () => {
    const[list,setList]= useState([]);
    const[count,setCount]= useState(0);
    const addgrocery = (data) => {
        const t= {
            title: data,
            index: count
        }
        setList([...list, t]);
        setCount(count+1);
    }
    const delgrocery = (id) => {
        const newList=list.filter((e)=>{
            return !(e.index == id);
        });
        setList(newList);
    }
    return(
        <>
            <Groceryinput xyz={addgrocery}/>
            {list.map((e) => (
                <Grocerylist value={e} key={e.index} abc={delgrocery}/>
            ))}
        </>           
    )
};