import React from "react";
function produceFactorial(num){
    var e,f;
    e = f = 1;
    while(e<=num){
        f=f*e;
        e++;
    }
    return f;
}
const AppExample10 = ()=>{
    const buttonClickhandler = ()=>{
        // alert("button Clicked");
        var factorial = produceFactorial(100);
        // the control wilkl mode to the next intrution when the prodeuce factoprial fuynction completes // it it take 20- min it will wait
        alert(factorial);
    }
    return (
        <div>
            <h1>Thinking Machine</h1>
            <button type="button" onClick={buttonClickhandler} >Click me</button>
        </div>
    )
}
export default AppExample10