function ServiceCard(props){

    return(

        <div className="service-card">

            <img src={props.image}/>

            <h2>{props.title}</h2>

            <p>{props.description}</p>

        </div>

    );

}

export default ServiceCard;