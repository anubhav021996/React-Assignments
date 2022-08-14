import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const Products = () => {
    const [list, setlist]= useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/posts").then(({data}) => {
            // console.log(data);
            setlist(data);
        });
    },[]);
     
    // console.log(list);
    const navigate= useNavigate();
    return(
        <>
            <h1>Welcome to Products Page</h1>
            
            <table style={{
                border: "solid 1px",
                margin: "auto",
            }}>
                <tbody>
                    {list.map((el)=>{
                        return <tr key= {el.id} onClick={()=>{
                            navigate(`/products/${el.id}`)
                        }}>
                                <td>{el.id}</td>
                                <td>{el.name}</td>
                                <td>{el.price}</td>
                            </tr>
                    })}
                </tbody>
            </table>
        </>
    )
}