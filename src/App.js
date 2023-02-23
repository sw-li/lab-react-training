import './App.css';
import IdCard from "./components/IdCard"
import Greetings from "./components/Greetings"
import Random from "./components/Random"
import jsonData from "./data/berlin.json"
function App() {
  const copyData = [...jsonData]
  const idCards = copyData.map(person => <IdCard person={person} ></IdCard> )
  return (
    <div className="App">
      
      {/* {idCards} */}
      {/* <Greetings lang="en" message="Shengwei"></Greetings> */}
      {/* <Random min={1} max={20} ></Random> */}
    </div>
  );
}

export default App;
