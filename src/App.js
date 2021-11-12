import './App.css';
import NumTranslator from './NumTranslator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <div className= "appText">
       <p className= "app-ps">
         This webpage was created using extreme development techniques.
      </p>
      <p className= "app-pAuthor">
        Authors: Grace Rodriguez, Kathy Fuller and Peter Simmon
      </p>
      <p className= "app-pDate">
        Date: 11/10/21
      </p>
		  <p className= "app-ps">
        Student Content - All rights reserved.
      </p>
		  <p className= "app-ps">
        Assignment: Convert Numbers to Words Challenge, L1
      </p>
       </div>
       <div className = "appNumber">
         < NumTranslator/>
       </div>
      </header>
    </div>
  );
}

export default App;
