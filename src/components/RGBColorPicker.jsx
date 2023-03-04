import { useState } from "react";
import SingleColorPicker from "./SingleColorPicker";

function RGBColorPicker() {
const [rValue, setRValue] = useState(255)
const [gValue, setGValue] = useState(255)
const [bValue, setBValue] = useState(255)
const [colorState,setColorState] = useState("rgb(255,255,255)")

const resetR = (newValue)=>{
    setRValue(newValue)
    setColorState(`rgb(${newValue},${gValue},${bValue})`)
}
const resetG = (newValue)=>{
    setGValue(newValue)
    setColorState(`rgb(${rValue},${newValue},${bValue})`)
}

const resetB = (newValue)=>{
    setBValue(newValue)
    setColorState(`rgb(${rValue},${gValue},${newValue})`)
}


    return (
      <div className="rgbColorPickers">
        <div className="singleColors">
          <SingleColorPicker color="r" value={rValue} updateColor={resetR} />
          <br />
          <SingleColorPicker color="g" value={gValue} updateColor={resetG}/>
          <br />
          <SingleColorPicker color="b" value={bValue} updateColor={resetB}/>
        </div>
        <br />
        <div className="combinedColor" style={{backgroundColor: colorState, color:"white"}}>
            <h1>rgb({rValue}, {gValue}, {bValue})</h1>
        </div>
      </div>
    );
}

export default RGBColorPicker;