import { Link } from "react-router-dom"

export const Nav= () => {
    return (
        <nav style={{
            display: "flex",
            justifyContent: "space-evenly"
        }}>
            <Link to="/"><h3>Home</h3></Link>
            <Link to="/products"><h3>Products</h3></Link>
        </nav>
    )
}