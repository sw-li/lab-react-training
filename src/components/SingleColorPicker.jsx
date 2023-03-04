
function SingleColorPicker(props) {
    const {color, value} = props
    return ( 
    <div>
        <div className="colorBlock" style={{backgroundColor: color ==="r"?`rgb(${value},0,0)`: color==="g"?`rgb(0,${value},0)`: `rgb(0,0,${value})`,color:"white"}}>
        <p>{color.toUpperCase()} Chanel Color</p>
        </div>
        <label><input type="number" min="0" max="255"  onChange={ e => props.updateColor(e.target.value)}/></label>
    </div>
    );
}

export default SingleColorPicker;