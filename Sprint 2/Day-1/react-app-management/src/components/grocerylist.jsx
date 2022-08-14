export const Grocerylist = ({value,abc}) => {
    return(
        <>
            <h3>{value.title}</h3>
            <button onClick={()=>{
                abc(value.index);
            }}>Delete</button>
        </>
    )
}