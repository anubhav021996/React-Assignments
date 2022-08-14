import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export const Products_details= () => {
    const [list, setlist]= useState({});
    const params= useParams();

    useEffect(()=>{
        axios.get(`http://localhost:3001/posts/${params.id}`).then(({data}) => {
            setlist(data);
            // console.log(data);
        });
    },[]);
    console.log(list);
    return(
        <>
            <h1>Welcome to Product Details Page</h1>
            <h1>{list.name}</h1>
            <h3>{"$"+list.price}</h3>
        </>
    )
}