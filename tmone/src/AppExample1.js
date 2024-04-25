import React, {Component, useRef} from 'react';
import './App.css';

function AppL1() {
    const tmSloganRef = useRef();
    const goToNextSlogan = function(){
        tmSloganRef.current.updateSlogan("Computer education is not about learning computer it is about learning how to learn computers.")
    }

    const goToNextMoto = function(){
        tmSloganRef.current.updateMoto("Update Moto from Big to very Big")
    }
  
  return (
    <div>
      <h1>Thinking Machines - Ujjain</h1>
      <TmSlogan slogan="We teach more than we promise to teach" moto="Think big" ref={tmSloganRef}/>
      <br></br><button type='button' onClick={goToNextSlogan} >Update Slogan</button>
      <br></br><button type='button' onClick={goToNextMoto} >Update Moto</button>
    </div>
  );
}
/*
class TmSlogan extends React.Component
{ 
  constructor(props){ 
    super(props);
    this.slogan = props.slogan;
    this.motto = props.moto;
  }
  updateSlogan(slog){
    this.slogan = slog
    alert(this.slogan); // here data is Updating 
  }
  render(){
    return (
      <b>
        {this.slogan}<br></br>  { // but not updating here } }
        {this.motto}<br></br>
      </b>
    )
  }
} 
then how to update data here?
we need to use states // spedific data structure we have to maintain
*/

class TmSlogan extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            slogan : props.slogan,
            moto: props.moto
        }
    }
    updateSlogan(slogan){
        this.setState({
            "slogan":slogan
        });
    }

    updateMoto(moto){
        this.setState({
            "moto":moto
        });
    }
    render(){
        return(
            <b>
                {this.state.slogan} <br></br>
                {this.state.moto}
            </b>
        );
    }
}
export default AppL1;
