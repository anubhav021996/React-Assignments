import { Link } from "react-router-dom"

export const Navbar= () => {
    return (
        <nav style={{
            display: "flex",
            justifyContent: "space-evenly",
        }}>
            <Link to={"/"}><h1>Home</h1></Link>
        </nav>
    )
}