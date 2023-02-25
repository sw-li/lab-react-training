import './App.css';
import IdCard from "./components/IdCard"
import Greetings from "./components/Greetings"
import Random from "./components/Random"
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import jsonData from "./data/berlin.json"
import Rating from './components/Rating';
import DriverCard from './components/DriverCard'
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';

/* const aCard = {  
  type:"Master",
  number:"0123456789018845",
  expirationMonth:3,
  expirationYear:2021,
  bank:"BNP",
  owner:"Maxence Bouret",
  bgColor:"gold",
  color:"white" }

const aDriverCard = {
  name:"Travis Kalanick",
  rating:4.2,
  img:"https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428",
  car:{
    model: "Toyota Corolla Altis",
    licensePlate: "CO42DE"}} */

function App() {
  /* const copyData = [...jsonData] */
  /* const idCards = copyData.map(person => <IdCard person={person} ></IdCard> ) */
  return (
    <div className="App">
      
      {/* {idCards} */}
      {/* <Greetings lang="en" message="Shengwei"></Greetings> */}
      {/* <Random min={1} max={20} ></Random> */}
      {/* <BoxColor r="250" g="0" b="0"></BoxColor> */}
      {/* <CreditCard card={aCard}></CreditCard> */}
      {/* <Rating> 1.78 </Rating> */}
      {/* <DriverCard card={aDriverCard}></DriverCard> */}
{/*       <LikeButton></LikeButton>
      <LikeButton></LikeButton> */}
      <ClickablePicture img = "./maxence.png" imgClicked = "./maxence-glasses.png"></ClickablePicture>
    </div>
  );
}

export default App;
