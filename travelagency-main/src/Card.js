import { Modal } from "@material-ui/core";
import React, { useState } from "react";
import "./Card.css";

function Card(props) {
  const [modalOpen, setmodalOpen] = useState(false);
  const onClick = () => {
    setmodalOpen((openState) => !openState);
  };
  let { country, accomodation, image } = props;
  return (
    <div className="card">
      <div className="card__container">
        <img src={image} alt="destination" />
        <div className="card__description">
          <h1>{country}</h1>
          <p>{accomodation} accomodations</p>
          <div className="card__button" onClick={onClick}>
            <h1>Book Now</h1>
          </div>
        </div>
      </div>
      {modalOpen ? <Modal clickOutside={onClick}></Modal> : null}
    </div>
  );
}

export default Card;
