function IdCard(props){
    const {person, filterClass} = props
    return (
        <div className={`oneCard ${filterClass}`}>
            <div className="idPhoto">
                <img src={person.img} alt="id card" />
            </div>
            <div className="idInfo">
                <h3>First name: <span>{person.firstName}</span> </h3>
                <h3>Last name: <span>{person.lastName}</span></h3>
                <h3>Country: <span>{person.country}</span></h3>
                <h3>Profile type: <span>{person.isStudent? "Student":"Staff"}</span> </h3>
            </div>
        </div>
    )
}

export default IdCard