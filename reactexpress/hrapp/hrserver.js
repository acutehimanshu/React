const oracle = require('oracledb');
const express = require('express');
const application = express();
async function getEmployees(request, response){
    var connection = null;
    try{
        connection = await oracle.getConnection({
            user: "hr",
            password: "hr",
            connectionString: "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=localhost)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=xepdb1)))"
        });
        console.log("connection to Oracle");
        resultSet = await connection.execute("select * from employees");
    }
    catch(err){
        response.send(err.message);
    }   
    finally{
        if(connection){
            try{
                await connection.close();
            }catch(err){
                console.log(err.message);
            }
        }
    }
    response.send(resultSet.rows);
}
application.get('/employees',  (res, req)=>{ getEmployees(res, req); });
application.listen(5050, ()=>{
    console.log("HR Server is ready on port 5050: ");
});