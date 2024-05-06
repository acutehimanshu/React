const express = require('express');
const bodyParser = require('body-parser');
const oracle = require('oracledb');
const app = express();
const urlEncodedBodyparser = bodyParser.urlencoded({extended:false}); // replace spcial characters with code
class Student {
    constructor(id, name, placementType, company, salary){
        this.id = id; 
        this.name = name;
        this.company = company;
        this.placementType = placementType;
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
    getPlacementType(){
        return this.placementType; 
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

app.post("/addPlacement", urlEncodedBodyparser, async function(request, response){
console.log(request.body);
console.log(request.body.id);
console.log(request.body.name);
console.log(request.body.company);
console.log(request.body.salary);
console.log(request.body.salaryType);
console.log(request.body.jobType);

const connectionString = {
    "user":"hr", 
    "password":'hr', 
    "connectionString":"//localhost:1521/xepdb1"
}; 
const connection = await oracle.getConnection(connectionString);
var resultSet = await connection.execute(`select * from students where id = ${request.body.id}`);
if(resultSet.rows.length > 0){
    await connection.close();
    response.send({"success":false, "message": `${request.body.id} exists`}) ; 
    return; 
}
console.log(`insert into students values (${request.body.id},'${request.body.name}', '${request.body.jobType}', '${request.body.company}', '${request.body.salary}', '${request.body.salaryType}')`);
await connection.execute(`insert into students values (${request.body.id},'${request.body.name}', '${request.body.jobType}', '${request.body.company}', '${request.body.salary}', '${request.body.salaryType}')`);
await connection.commit();
await connection.close();
response.send({"success":true, "data": request.body})
});

app.get("/deleteStudent", async function(request, response){
    const connectionString = {
        "user":"hr", 
        "password":'hr', 
        "connectionString":"//localhost:1521/xepdb1"
    }; 
    const connection = await oracle.getConnection(connectionString);
    var resultSet = await connection.execute(`delete students where id = ${request.query.id}`);
    await connection.commit();
    await connection.close();
    response.send({"success":true, "data": request.body})
});

app.get("/getStudentById", async function(request, response){
    const connectionString = {
        "user":"hr", 
        "password":'hr', 
        "connectionString":"//localhost:1521/xepdb1"
    }; 
    const connection = await oracle.getConnection(connectionString);
    var resultSet = await connection.execute(`select * from students where id = ${request.query.id}`);
    var student = {
        id:resultSet.rows[0][0],
        name:resultSet.rows[0][1].trim(),
        placementType:resultSet.rows[0][2],
        company:resultSet.rows[0][3].trim(),
        salary:resultSet.rows[0][4],
        salaryType:resultSet.rows[0][5],
    }
    await connection.close();
    response.send({"success":true, "data": student})
});


app.post("/updateStudent", urlEncodedBodyparser, async function(request, response){
    console.log(request.body);
    const connectionString = {
        "user":"hr", 
        "password":'hr', 
        "connectionString":"//localhost:1521/xepdb1"
    }; 
    const connection = await oracle.getConnection(connectionString);
    await connection.execute(`UPDATE students SET name = '${request.body.name}', job_type = '${request.body.jobType}', company = '${request.body.company}', salary = ${request.body.salary}, salary_type = '${request.body.salaryType}'  WHERE id = ${request.body.id}`);
    await connection.commit();
    await connection.close();
    response.send({"success":true, "data": request.body})
});

app.listen(5050, ()=>{
    console.log("Port is ready on port 5050: ");
});