import { useState, useEffect } from 'react';
import dice0 from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';

function Dice() {
  const [clicked, setClicked] = useState(false);
  const [myDice, setMydice] = useState(dice0);
  // we should have two states. clicked will trigger the update lifecircle. 
  // if we use myDice as trigger, it will change infinitly. 

  useEffect(() => {
    setTimeout(() => {
      setMydice(randomDice());
    }, 1000);
  }, [clicked]);

  const handleClick = (e) => {
    setMydice(dice0)
    setClicked(!clicked);
  };

  const allDices = [dice1, dice2, dice3, dice4, dice5, dice6];
  const randomDice = () => {
    return allDices[Math.floor(Math.random() * 6)];
  };

  return (
    <div className="dices">
      <img onClick={handleClick} src={myDice} alt="" />
    </div>
  );
}

export default Dice;
