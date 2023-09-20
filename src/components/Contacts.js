import React from "react";
import '../style/contacts.css'

function Contacts() {
  const phoneNumber = `+36 20 368 8363`;


  return (
    <div className="elementsWrapper">

      <div className="element">
        <a target="_blank" href="https://korosiandras.com/">
          website
        </a>
      </div>
      <div className="element">
        <a target="_blank" href="https://github.com/Drewcamper">
          github
        </a>
      </div>
      <div className="element">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/andr%C3%A1s-k%C5%91r%C3%B6si-535b27177/">
          linkedIn
        </a>
      </div>
      <div className="element">
        <a target="_blank" href="mailto:korosiandris@gmail.com">
          korosiandris@gmail.com
        </a>
      </div>
      <div className="element">
        <a
          onClick={() => {
            window.location.href = `tel:${phoneNumber}`;
          }}></a>
        {phoneNumber}
      </div>
    </div>
  );
}

export default Contacts;
