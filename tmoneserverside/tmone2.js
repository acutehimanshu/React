const express = require('express');
const oracle = require('oracledb');
const app = express();

class Student {
    constructor(id, name, palcementType, company, salary){
        this.id = id; 
        this.name = name;
        this.company = company;
        this.palcementType = palcementType;
        this.salary = salary;
    }

    getId(){
        return this.id; 
    }
    getName(){
        return this.name; 
    }
    getCompany(){
        return this.company; 
    }
    getPalcementType(){
        return this.palcementType; 
    }
    getSalary(){
        return this.salary; 
    }
}

app.get("/placements", async function(request, response){
    const connectionString = {
        "user":"hr", 
        "password":'hr', 
        "connectionString":"//localhost:1521/xepdb1"
    }; 
    const connection = await oracle.getConnection(connectionString);
    let resultSet = await connection.execute('Select * FROM students');
    resultSet = resultSet.rows;
    const students = [];
    resultSet.forEach((row)=>{
        var id = row[0];
        var name = row[1].trim();
        var job_type = row[2];
        var company = row[3].trim();
        var salary = row[4];
        var salary_type = row[5];
        var placementType;
        if(job_type == "I"){
            placementType = 'Internship';
        }
        if(job_type == "F"){
            placementType = 'Full Time';
        }
        if(salary_type == 'Y'){
            if(salary > 99000){
                salary = (salary/100000)+" Lakh Per Annum";
            }else{
                salary = (salary)+" Per Annum";
            }
        }else{
            if(salary > 99000){
                salary = (salary/100000)+" Lakh Per Month";
            }else{
                salary = (salary)+" Per Month";
            }
        }
        
        students.push(new Student(id, name, placementType, company, salary));
    });
    response.send(students);
});

app.listen(5050, ()=>{
    console.log("Port is ready on port 5050: ");
});