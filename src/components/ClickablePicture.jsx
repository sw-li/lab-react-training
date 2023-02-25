import { useState } from "react"


function ClickablePicture(){
    const [isClicked, setIsClicked] = useState(false)
    const handleClick= e=> {
        console.log("img clicked")
        setIsClicked(!isClicked)}
    return(
        <div>
            <img src={isClicked? "./maxence-glasses.png":"./maxence.png"} alt="" onClick={handleClick}/>
        </div>
    )
}

export default ClickablePicture