import React from "react";
import "./style.css";

function PuppyCard(props) {
    return (
      <div className="card" onClick={() => props.puppyClickHandler(props.id)}>
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
      </div>
    );
  }

export default PuppyCard;