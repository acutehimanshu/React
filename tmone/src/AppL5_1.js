import React, { useRef } from "react";
function AppL5_1(){
    const slogan="We Teach more than we promise to teach";
    const titleRef = useRef();
    const onClicked = ()=>{
        titleRef.current.updateSlogan("new Slogan update");
    }
    return (
        <div>
            <h2>Lecture 5</h2>
            <Title slogan={slogan} ref={titleRef} onClickedMethod={onClicked}/>
        </div>
    )
}
class Title extends React.Component{
    constructor(props){
        super(props);
        this.state={
            slogan : props.slogan
        }
        this.onClickedMethod = props.onClickedMethod;
    }
    onClickedMethod=(ev)=>{
        this.onClickedMethod() 
    }
    updateSlogan(slogan){
        this.setState({
            slogan : slogan
        });
    }
    render(){
        return(
            <h4 onClick={this.onClickedMethod}>{this.state.slogan}</h4>
        )
    }
}
export default AppL5_1