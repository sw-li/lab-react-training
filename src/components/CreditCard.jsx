function CreditCard(props){
    const {card} = props
    return (
        <div className="CreditCard" style={{backgroundColor:card.bgColor}}>
            <div className="cardType txtAlignRight">
                <img src={card.type==="Master Card"? "../assets/images/master-card.svg": "../assets/images/visa.png"} alt="card type" />
            </div>
            <div className="cardNumber" style={{backgroundColor:card.bgColor}}>
                <h1><span className="bolderTxt txtAlignCenter">···· ···· ···· ···· </span>{card.number.splice(0,-4)} </h1>
            </div>
                
            <div className="creditCardInfo txtAlignLeft">
                <h3>Expires: {card.expirationMonth}/{card.expirationYear}  {card.bank} </h3>
                <h3>{card.owner}</h3>
            </div>
        </div>
    )
}

export default CreditCard