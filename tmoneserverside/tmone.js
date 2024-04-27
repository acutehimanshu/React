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

class Student {
    constructor(id, name, jobType, company, salary, salaryType){
        this.id = id; 
        this.name = name;
        this.company = company;
        this.salary = salary;
        if(jobType == 'F')
            this.jobType = 'Full Time'; 
        else 
            this.jobType = 'Internship'; 
        if(salaryType == 'Y')
            this.salaryType = 'Yearly'; 
        else 
            this.salaryType = 'Monthlu'; 
        
    }
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
// for assignment
app.get("/getStudents", async function(request, response){
    console.log("getStudents got called");
    const connection = await oracle.getConnection({
        "user":"hr", 
        "password":'hr', 
        "connectionString":"//localhost:1521/xepdb1"
    });
    let resultSet = await connection.execute('select * from students');
    resultSet = resultSet.rows;
    const students = [];
    resultSet.forEach((row)=>{
        students.push(new Student(row[0], row[1], row[2],row[3], row[4], row[5]));
    });
    response.send(students);
});

app.listen(5050, ()=>{
    console.log("Port is ready on port 5050: ");
});