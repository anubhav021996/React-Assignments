import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addtodo } from "../redux/action";
import axios from "axios";
import { useEffect } from "react";

export const Todos= () => {
    let [text, settext] = useState("");
    const todos= useSelector((store)=>store.todos);
    const dispatch= useDispatch();
    const Navigate= useNavigate();

    const gettodos= () => {
        axios.get("http://localhost:3001/data").then(({data})=>{
            dispatch(addtodo(data));
        })
    }

    const addtodos= () => {
        axios.post("http://localhost:3001/data", {task:text,id:todos.length+1,status:"Pending"}).then(()=>{
            gettodos();
        })
    }

    useEffect(()=>{
        gettodos();
    },[]);

    return(
        <>
            <input type="text" onChange={(e)=>settext(e.target.value)}></input>
            <button onClick={()=>{
                addtodos();
            }}>Add</button>
            {todos.map((e)=>(
                <div key={e.id} onClick={()=>{
                    Navigate(`/todo/${e.id}`);
                }}>{`${e.id}. ${e.task}`}</div>
            ))}
        </>
    )
}