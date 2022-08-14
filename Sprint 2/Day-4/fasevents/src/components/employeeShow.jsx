export const EmployeeShow = ({value}) => {
    return(
        <>
           <div>
               <div>{value.name}</div>
               <div>{value.age}</div>
               <div>{value.add}</div>
               <div>{value.dept}</div>
               <div>{value.sallary}</div>
           </div>
        </>
    )
}