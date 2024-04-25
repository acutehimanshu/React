import React from "react";
function produceFactorial(num, addressoFFunWilldeliver){
    setTimeout(() => {
        var e,f;
    e = f = 1;
    while(e<=num){
        f=f*e;
        e++;
    }
    addressoFFunWilldeliver( f);
    }, 5000);
}
const AppExample11 = ()=>{
    const buttonClickhandler = ()=>{
        produceFactorial(10, function(factorial){
            alert("factorial is "+factorial)
        });
        alert("factorial is being prodecued somwhere else.");
    }
    return (
        <div>
            <h1>Thinking Machine</h1>
            <button type="button" onClick={buttonClickhandler} >Click me</button>
        </div>
    )
}
export default AppExample11