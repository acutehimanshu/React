import React, { useRef } from "react";
function AppL5_2(){
    const [aaa,bbb] = React.useState("Title");
    const update = ()=>{
        bbb("updated Title");
    }
    return (
        <div>
            <h2>Lecture 5</h2>
            {aaa}
            <br></br>
            <Title slogan={aaa} />
            <br></br>
            <button onClick={update}>Update</button>
        </div>
    )
}
const Title = (props)=>{
    return(
        <h3>{props.slogan}</h3>
    )
}
export default AppL5_2