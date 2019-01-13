import React from "react";

function PuppyCard(props) {
    return (
      <div className="card">
        <div className="img-container">
          <img src={props.image} />
        </div>
        {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
          𝘅
        </span> */}
      </div>
    );
  }

export default PuppyCard;