import React from "react";

const getPlacements = () =>{
const promise = new Promise((resolve)=>{
    // code to send request to http://localhost:5050/placements
    // fetch("http://localhost:5050/placements").then((response)=>{
        fetch("/placements").then((response)=>{
        return response.json();
    }).then((employees)=>{
        resolve(employees);
    });
});
return promise;
}

const AppExample14 = ()=>{
    getPlacements().then((employees)=>{
        alert(employees);
    });
    return(
        <div>
            <h1>Example 14</h1>
        </div>
    )
}
export default AppExample14