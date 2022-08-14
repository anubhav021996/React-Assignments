import { useState } from "react";
import axios from "axios";


export const Employees= ({handleShow}) => {
    const [data,setData]= useState({
        name:"",
        age:"",
        add:"",
        dept:"",
        sallary:""
    });

    const handleChange= (event) => {
        const {id,value}= event.target;
        setData({
            ...data,
            [id]: value
        });
    }

    const handleSubmit= (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/posts",data).then(()=>{
            handleShow();
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <h1>Employee Details</h1>
            <input id="name" type="text" placeholder="Enter your name" onChange={handleChange}></input>
            <input id="age" type="number" placeholder="Enter your age" onChange={handleChange}></input>
            <input id="add" type="text" placeholder="Enter your address" onChange={handleChange}></input>
            <select id="dept" onChange={handleChange}>
                <option>Choose Department</option>
                <option>Operations</option>
                <option>HR</option>
                <option>Curricullam</option>
                <option>IA</option>
            </select>
            <input id="sallary" type="number" placeholder="Enter your sallary" onChange={handleChange}></input>
            <input type="submit"></input>
        </form>
    )
}