function Random(props){
    const {min, max} = props
    const randomNumber = Math.floor(Math.random() * (max-min) + min)
    console.log(randomNumber)
    return (
        <div className="messageCard">
            <h2>Random value between {min} and {max} {"=>"} {randomNumber}</h2>
        </div>
    )
}

export default Random