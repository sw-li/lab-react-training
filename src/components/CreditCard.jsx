

function CreditCard({card}){

    return (
        <div className="CreditCard" style={{backgroundColor:card.bgColor, color:card.color}}>
            <div className="cardType txtAlignRight">
                <img className="miniLogo" src={card.type === "Visa"? "./visa.Png":"./master-card.svg"} alt="card type" />
            </div>
            <div className="cardNumber" style={{backgroundColor:card.bgColor}}>
                <h1><span className="bolderTxt txtAlignCenter">···· ···· ···· ···· </span>{card.number%10000} </h1>
            </div>
                
            <div className="creditCardInfo txtAlignLeft">
                <h3>Expires: {card.expirationMonth}/{card.expirationYear}&nbsp {card.bank} </h3>
                <h3>{card.owner}</h3>
            </div>
        </div>
    )
}

export default CreditCard