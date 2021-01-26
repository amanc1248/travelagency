import React, { useRef } from "react";
import "./Modal.css";
function Modal(props) {
  const myRef = useRef();
  const clickOutside = (e) => {
    if (!myRef.current.contains(e.target)) {
      props.clickOutside();
    }
  };
  return (
    <div className="modal" onClick={clickOutside}>
      <div className="modal__content" ref={myRef}>
        <h1>youp youp youp</h1>
        <p>Better make your homework</p>
      </div>
    </div>
  );
}

export default Modal;
