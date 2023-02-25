function Rating(props){
    const numberOfStars = Math.round(props.children) 
    const hearts = "♥︎".repeat(numberOfStars) + "♡".repeat(5-numberOfStars) 
    return (
        <div>{hearts}</div>
    )
}

export default Rating