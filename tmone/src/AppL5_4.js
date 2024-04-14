import React from "react";
const AppL5_4 = ()=>{
    const [textData, setTextData] = React.useState('');
    const sayToChild= (ev)=>{
        setTextData(ev.currentTarget.value)
    }
    return (
        <div>
            <h1>Lecture 5 - Example 4</h1>
            <TextBoXComponent  tellParent={sayToChild} text={textData}/>
        </div>
    )
}
const TextBoXComponent = (props)=>{
    const doSomething = (ev)=>{
        props.tellParent(ev);
    }
    return (
        <div>
            <input type="text" onChange={doSomething} />
            <br></br>
            Child is saying: <b>{props.text}</b>
        </div>
    )
}
export default AppL5_4;