const oracle = require('oracledb');
async function testConnection(){
    var connection = null;
    try{
        connection = await oracle.getConnection({
            user: "hr",
            password: "hr",
            connectionString: "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=localhost)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=xepdb1)))"
        });
        console.log("connection to Oracle");
        resultSet = await connection.execute("select * from employees");
        
        console.log(`Number of employees ${resultSet.rows.length})`);
    }
    catch(err){
        Response.send(err.message);
    }   
    finally{
        if(connection){
            try{
                await connection.close();
                console.log("connection to oracle has been closed");
            }catch(err){
                console.log(err.message);
            }
        }
    }
    Response.send(resultSet.rows);
}

