import { useDispatch, useSelector } from "react-redux";
import { addtoken } from "../Redux/login/action";

export const Navbar= () => {
    let Dispatch= useDispatch();
    let {token}= useSelector((store)=>store.token);
    let nav;
    token ? nav= "Logout" : nav= "Login";
    return(
        <>
            <h3 onClick={()=>{
                if(token){
                    localStorage.removeItem("token");
                    Dispatch(addtoken(""));
                }
            }}>{nav}</h3>
        </>
    )
}