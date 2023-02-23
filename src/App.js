import './App.css';
import IdCard from "./components/IdCard"
import Greetings from "./components/Greetings"
import Random from "./components/Random"
import BoxColor from './components/BoxColor';
import jsonData from "./data/berlin.json"
function App() {
  const copyData = [...jsonData]
  const idCards = copyData.map(person => <IdCard person={person} ></IdCard> )
  return (
    <div className="App">
      
      {/* {idCards} */}
      {/* <Greetings lang="en" message="Shengwei"></Greetings> */}
      {/* <Random min={1} max={20} ></Random> */}
      <BoxColor r="250" g="0" b="0"></BoxColor>
    </div>
  );
}

export default App;
