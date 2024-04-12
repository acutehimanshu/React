import React, {Component} from 'react';
import './App.css';

function App() {
  const goToNextSlogan = function(){
    alert('GO to Next Slogan');
  }
  return (
    <div>
      <h1>Thinking Machines - Ujjain</h1>
      <TmSlogan slogan="We teach more than we promise to teach" moto="Think big"/>
      <button type='button' onClick={goToNextSlogan} >Click me</button>
    </div>
  );
}

class TmSlogan extends React.Component
{ 
  /*
    constructor(properties){
        // if not add super() Error->Must call super constructor in derived class before accessing 'this' or returning from derived constructor
      this.slogan = properties.slogan;
      this.motto = properties.moto;
    }
  */
  constructor(props){ // why props // samaj k liye but we can use anything its just parameter.
    super(props);
    this.slogan = props.slogan;
    this.motto = props.moto;
  }
  render(){
    return (
      <b>
        {this.slogan}<br></br>
        {this.motto}<br></br>
      </b>
    )
  }
}

export default App;
