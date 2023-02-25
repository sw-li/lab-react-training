import './App.css';
import IdCard from "./components/IdCard"
import Greetings from "./components/Greetings"
import Random from "./components/Random"
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import jsonData from "./data/berlin.json"


const aCard = {  
  type:"Master",
  number:"0123456789018845",
  expirationMonth:3,
  expirationYear:2021,
  bank:"BNP",
  owner:"Maxence Bouret",
  bgColor:"gold",
  color:"white" }




function App() {
  const copyData = [...jsonData]
  /* const idCards = copyData.map(person => <IdCard person={person} ></IdCard> ) */
  return (
    <div className="App">
      
      {/* {idCards} */}
      {/* <Greetings lang="en" message="Shengwei"></Greetings> */}
      {/* <Random min={1} max={20} ></Random> */}
      {/* <BoxColor r="250" g="0" b="0"></BoxColor> */}
      <CreditCard card={aCard}></CreditCard>
    </div>
  );
}

export default App;
