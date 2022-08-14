import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import { addtodo } from "../redux/action";
import axios from "axios";

export const Todolist= () => {
    const dispatch= useDispatch();
    const Navigate= useNavigate();
    const params= useParams();
    let todos= useSelector((store)=>store.todos);
    todos= todos.filter((e)=>{
        return e.id==params.id;
    });

    const gettodos= () => {
        axios.get("http://localhost:3001/data").then(({data})=>{
            dispatch(addtodo(data));
        })
    }

    const deletetodo= (id) => {
        axios.delete(`http://localhost:3001/data/${id}`).then(()=>{
            gettodos();
        });
    }

    const chnagestatus= (id,status) => {
        if(status=="Pending"){
            axios.patch(`http://localhost:3001/data/${id}`, {status: "Completed"}).then(()=>{
                gettodos();
            });
        }
        else{
            axios.patch(`http://localhost:3001/data/${id}`, {status: "Pending"}).then(()=>{
                gettodos();
            });
        }
    }

    return(
        <>
            <h1>TODOLIST</h1>
            <div style={{display:"flex", justifyContent: "space-evenly"}}>
                <h3>{todos[0].task}</h3>
                <h3 onClick={()=>{
                    chnagestatus(todos[0].id,todos[0].status);           
                }}>Status: {todos[0].status}</h3>
                <h3 onClick={()=>{
                    deletetodo(todos[0].id);
                    Navigate("/");
                }}>Remove</h3>
            </div>            
        </>
    )
}