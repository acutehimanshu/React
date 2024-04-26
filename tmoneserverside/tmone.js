const express = require('express');
const oracle = require('oracledb');
const app = express();

class Employee {
    constructor(id, fn, ln){
        this.id = id; 
        this.firstName = fn;
        this.lastName = ln;
    }
    getId(){return this.id; }
    getFirstName(){return this.firstName; }
    getLastName(){return this.lastName; }
}

app.get("/placements", async function(request, response){
    const connectionString = {
        "user":"hr", 
        "password":'hr', 
        "connectionString":"//localhost:1521/xepdb1"
    }; 
    const connection = await oracle.getConnection(connectionString);
    let resultSet = await connection.execute('Select employee_id, first_name, last_name FROM employees ORDER BY first_name');
    resultSet = resultSet.rows;
    const employees = [];
    resultSet.forEach((row)=>{
        employees.push(new Employee(row[0], row[1], row[2]));
    });
    response.send(employees);
});

app.listen(5050, ()=>{
    console.log("Port is ready on port 5050: ");
});