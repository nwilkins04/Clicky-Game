import React from "react";
import "./style.css";

function PuppyCard(props) {
    return (
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
        </div>
        {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
          𝘅
        </span> */}
      </div>
    );
  }

export default PuppyCard;