import React from "react";
import loading from './loader.gif';
function produceFactorial(num, addressoFFunWilldeliver){
var promise = new Promise(function(resolve){
    setTimeout(function(){
        var e,f;
        e = f = 1;
        while(e<=num){
            f=f*e;
            e++;
        }
    resolve(f);
    }, 5000);
});
return promise;
}
const AppExample13 = ()=>{
    const [processing, setProcessing] = React.useState(false);
    const [jobStared, setJobStared] = React.useState(false);
    const [factorial, setFactorial] = React.useState(0);
    const buttonClickhandler = ()=>{
        setProcessing(true);
        setJobStared(true);
        var promise = produceFactorial(5);
        alert("factorial is being procided somewhere");
        promise.then(function(fact){
            alert("factorial of the file is "+fact);
            setFactorial(fact);
            setProcessing(false);
        })
    }
    return (
        <div>
            <h1>Thinking Machine</h1>
            <button type="button" onClick={buttonClickhandler} >Click me</button>
            <br></br>
            { jobStared && processing===false && "Factorial:"}
            { jobStared && processing===false && factorial}
            { jobStared && processing===true && <img src={loading}/> }
        </div>
    )
}
export default AppExample13