function Greetings(props){
    const {lang, message} = props
    let salutation = ""
    switch(lang){
        case "de":
            salutation= "Hallo "
        case "fr":
            salutation = "Bonjour "
        case "en":
            salutation= "Hello "
            case "es":
                salutation= "Ola "
        default:
            salutation="Hi "
    }
    return (
        <div className="messageCard">
            <h2>{salutation}{message}</h2>
        </div>
    )
}

export default Greetings