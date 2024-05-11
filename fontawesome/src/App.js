import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSpinner } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
        <h2>Thinking Machine</h2>
        <FontAwesomeIcon icon={faCoffee}/> &nbsp;&nbsp;
        <span style={{background:"red"}} >
          <FontAwesomeIcon icon={faCoffee}/>
        </span>
        &nbsp;&nbsp;
        <span style={{background:"red"}} >
          <FontAwesomeIcon icon={faCoffee} inverse/>
        </span>
        &nbsp;&nbsp;

        <FontAwesomeIcon icon={faCoffee} spin/> &nbsp;&nbsp;

        <FontAwesomeIcon icon={faSpinner} pulse/> &nbsp;&nbsp;

        <FontAwesomeIcon icon={faSpinner} rotation={90}/> &nbsp;&nbsp;
    </div>
  );
}

export default App;
