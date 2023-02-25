
import Rating from "./Rating"

function DriverCard(props){

    const {card} = props
return(
    <div className="oneDriverCard">
            <div className="idPhoto">
                <img src={card.img} alt="id card" />
            </div>
            <div className="idInfo">
                <h3>{card.name}</h3>
                <Rating>{card.rating}</Rating>
                <h3>{card.car.model} - {card.car.licensePlate}</h3>
            </div>
        </div>
)
}

export default DriverCard