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
                xyz(text);
            }}>Add Item</button>
        </>
    )
}