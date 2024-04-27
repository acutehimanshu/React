import React from "react";

const getPlacements = () =>{
const promise = new Promise((resolve)=>{
    // code to send request to http://localhost:5050/placements
    // fetch("http://localhost:5050/placements").then((response)=>{
        fetch("placements").then((response)=>{
        return response.json();
    }).then((employees)=>{
        resolve(employees);
    });
});
return promise;
}

const AppExample14 = ()=>{
    /*
    Everytime when this will rerender then this getplacements will execute.
    this is bug. 
    it should execute only once we will use useEffect here 
    getPlacements().then((employees)=>{
        alert(employees);
    });*/
    React.useEffect(()=>{
        getPlacements().then((emps)=>{
            setEmployees(emps);
        });
    },[]);
    const [employees, setEmployees] = React.useState([]);

    return(
        <div>
            <h1>Example 14</h1>
            <EmployeesListComponent employees = {employees} />
        </div>
    )
}
const EmployeesListComponent= ({employees})=>{
    
    return (
        <div>
            <ul>
                {
                    employees.map((employee)=>{
                        return (
                            <li key={employee.id}>{employee.id}, {employee.firstName}, {employee.lastName}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default AppExample14