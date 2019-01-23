import React from "react";
import "./card.css";

function Card(props) {
    return (
        <div
            style={{ backgroundImage: `url(${props.image})` }}
            className="chi-card col-md-4"
            onClick={() => props.handleClicked(props.id)}
        >
            {props.name}
        </div>
    )
}

export default Card;