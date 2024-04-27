import React from 'react'
const AppExample15 = ()=>{
    const [valueOne, setValueOne] = React.useState('one');
    const [valueTwo, setValueTwo] = React.useState('Two');
    const onValueOneChange = ()=>{
        setValueOne("New Title");
    }
    const onValueTwoChange = ()=>{
        setValueTwo("New Title again");
    }
    React.useEffect(()=>{
        alert("value one has been changed");
    }, [valueOne]);
    return(
        <div>
            <h1>Example 15</h1>
            <h3>{valueOne}</h3>
            <h3>{valueTwo}</h3>
            <button type='button' onClick={onValueOneChange}>Change Title One</button>
            <button type='button' onClick={onValueTwoChange}>Change Title Two</button>
        </div>
    )
}

export default AppExample15