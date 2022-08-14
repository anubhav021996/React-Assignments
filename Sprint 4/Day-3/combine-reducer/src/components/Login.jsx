import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addtoken } from "../Redux/login/action";

export const Login= () => {
    const Dispatch= useDispatch();
    const[data,setdata]= useState("");

    const handleChange = (e) => {
        const {id,value} = e.target;
        setdata({
            ...data,
            [id]: value,
        })
    }

    const fetch= (email,pass) => {
        axios.post("https://reqres.in/api/login",{
            "email": email,
            "password": pass,
        }).then((res)=>{
            localStorage.setItem("token",JSON.stringify(res.data.token));
            Dispatch(addtoken(res.data.token));
        })
    }

    return(
        <>
            <h1>Login Page</h1>
            <input type= "email" id="email" onChange={handleChange} placeholder="Enter Email" />
            <input type= "password" id="pass" onChange={handleChange} placeholder="Enter Password" />
            <button onClick={()=>{
                fetch(data.email,data.pass);
            }}>Submit</button>
        </>
    )
}