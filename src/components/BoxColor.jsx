function BoxColor(props){
    const {r, b, g} = props
    const color = "rgb("+r+","+g+","+b+")"
    function rgbToHex(r,g,b){
        return ("#" + r.toString(16) + g.toString(16) +b.toString(16))
    }
    return (
        <div className="messageCard " style={{backgroundColor: color }}>
            <h2>{color}</h2>
            <h2>{rgbToHex(r,g,b)}</h2>
        </div>
    )
}

export default BoxColor