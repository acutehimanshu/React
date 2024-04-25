import React from "react";
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
const AppExample12 = ()=>{
    const buttonClickhandler = ()=>{
        var promise = produceFactorial(5);
        alert("factorial is being procided somewhere");
        promise.then(function(fact){
            alert("factorial of the file is "+fact);
        })
    }
    return (
        <div>
            <h1>Thinking Machine</h1>
            <button type="button" onClick={buttonClickhandler} >Click me</button>
        </div>
    )
}
export default AppExample12