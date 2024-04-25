import React from "react";

 const Titles = [
        "Thinking Machine",
        "We teach more than we promise",
        'Think Big',
        "Ujjain is the City of God"
    ];

const AppExample5 = ()=>{
    // alert('cool'); // printint 2 times
    // const Titles = [
    //     "Thinking Machine",
    //     "We teach more than we promise",
    //     'Think Big',
    //     "Ujjain is the City of God"
    // ]; // putting this outside the appexmaple5
    const [titleIndex, setTitleIndex] = React.useState(0);
    const changeTitle = ()=>{
        if(titleIndex == Titles.length-1) setTitleIndex(0);
        else setTitleIndex(titleIndex+1);
    }
    const doSomething = ()=>{
        alert(Titles.length);
        Titles.push("Programming is cool");
        alert(Titles.length);
        setTitleIndex(0); // if we comment this it will not rerender // 
        // if data rerender then titles will again initialise and length will be same as intiall every time when it will rerender
        // to avoid this we should keep data outside the componenent 
    }
    return (
        <div>
            <h1 onClick={changeTitle}>{Titles[titleIndex]}</h1>
            <h3 onClick={doSomething}>Current Title from index: {titleIndex}</h3>
        </div>
    )
}

export default AppExample5;