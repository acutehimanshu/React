import React, { useRef } from "react";
function AppL5_3(){
    const [aaa,bbb] = React.useState("Title");
    const update = ()=>{
        bbb("updated Title");
    }
    return (
        <div>
            <h2>Lecture 5</h2>
            {aaa}
            <br></br>
            <Title slogan={aaa} justDoIt={update} />
            <br></br>
            
        </div>
    )
}
const Title = (props)=>{

    const updateSlogan = ()=>{
        props.justDoIt();
    }

    return(
        
        <h3 onClick={updateSlogan}>{props.slogan}</h3>
    )
}
export default AppL5_3