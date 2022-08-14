import axios from "axios";
import { useState } from "react"

export const Groceryinput = ({xyz}) => {
    const[text, setText]= useState("");
    return(
        <>
            <h1>Grocery</h1>
            <input type="text" onChange={(e) => {
                setText(e.target.value);
            }}></input>
            <button onClick={()=>{
                axios.post("http://localhost:3001/groceries",{title: text}).then(()=>{
                    xyz();
                });
            }}>Add Item</button>
        </>
    )
}