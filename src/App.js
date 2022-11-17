import { useState } from "react";
// import { Route, Switch } from "react-router-dom";
import List from "./List";
import './style.css'
import data from "./data";
function App() {
  const [people, setPeople] = useState(data);
  function restoreData(){
  setPeople(data);
}
  return (
    
     
      <div className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} setPeople={setPeople}/>
       {people.length > 0 ? <button id="btn1" onClick={() => setPeople([])}>Clear all</button> :
        <button id="btn2" onClick={() => {restoreData()}}>Restore</button>}
      </div>
    
   
      
  );
}

export default App;
