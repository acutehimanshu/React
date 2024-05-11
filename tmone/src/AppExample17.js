import React from 'react';
function AppExample17(){
    /*
    const arrayReducer=()=>{
        var x = [10,20,30,40];
        x.reduce((a,b,c,d)=>{
            console.log(a);
            console.log(b);
            console.log(c);
            console.log(d);
        });
    } 
    */ 

    const arrayReducer=()=>{
        var x = [10,20,30,40];
        var j = x.reduce((a,b,c,d)=>{
            console.log(a);
            console.log(b);
            console.log(c);
            console.log(d);
            return a+b;
        }, 0);
        alert("Sum is "+j)
    }
    // pure function
    const reduce1=(value, action)=>{
        if(action == 'UP') return value+1;
        if(action == 'DOWN') return value-1;
        return value;
    }

    // reduce2 is not a pure function
    const reduce2=(obj, action)=>{
        if(action == 'UP') obj.value++;
        if(action == 'DOWN') obj.value--;
        return obj;
    }

    // reduce2 is a pure function
    const reduce3=(obj, action)=>{
        var m = {
            value: obj.value
        }
        if(action == 'UP') m.value++;
        if(action == 'DOWN') m.value--;
        return m;
    }
    const doSomething = ()=>{
        var v =10;
        console.log(reduce1(v, 'UP'));
        console.log(v); // not changing 
        console.log(reduce1(v, 'DOWN'));
        console.log(v); // not changing

        var obj = {"value": 100};
        console.log(reduce2(obj, 'UP').value);
        console.log(obj.value); // changing
        console.log(reduce2(obj, 'DOWN').value);
        console.log(obj.value); // changing

        var obj2 = {"value": 200};
        console.log(reduce3(obj2, 'UP').value);
        console.log(obj2.value); // not changing 
        console.log(reduce3(obj2, 'DOWN').value);
        console.log(obj2.value); // not changing  
    }

    const add = (e,f,g,h,j)=>{
        return e+f+g+h+j;
    }
    const spreadOperator = ()=>{
        var x = [10,20,30, 40, 50];
        alert(add(x[0], x[1], x[2], x[3], x[4]));
        alert(add(...x)); // this is spread operator ...VariableName (3 dots and vairable name )
        var a,b,c,d; 
        [a,b,c,d] = [...x];
        console.log(d);
        console.log(c);
        console.log(b);
        console.log(a);
    }

    const reduceIt=(obj, action)=>{
        if(action == "ADD"){
            return {...obj, "result":obj.firstNumber + obj.secondNumber }
        }
        if(action == "SUBSTRACT"){
            return {...obj, "result":obj.firstNumber - obj.secondNumber }
        }
        return obj;
    }
    const someMethod=()=>{
        var dataObject ={
            firstNumber: 10,
            secondNumber: 20,
            result : 0
        }
        alert(reduceIt(dataObject, "ADD").result);
        alert(dataObject.result);

        alert(reduceIt(dataObject, "SUBSTRACT").result);
        alert(dataObject.result);
    }
    return (
        <div>
            <h2>Example 17| Lecture 21</h2>

            <button type='text' onClick={arrayReducer}>Array Reducer</button>
            <button type='text' onClick={doSomething}>Reducer (Pura Function)</button>
            <button type='text' onClick={spreadOperator}>Spread Operator</button>
            <button type='text' onClick={someMethod}>Reduce It </button>
        </div>
    )
}
export default AppExample17;