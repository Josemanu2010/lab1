import { useState } from "react";
import "./Comp2.css"

function Comp2({showdetails}) {

    // Origen, localización e Img
return (
    <div className="details">
        <hr />
        <span className="img"><img src={showdetails.image} /></span>
        <span><strong>Origen: </strong>{showdetails.origin['name']}</span>
        <span><strong>Localización: </strong>{showdetails.location['name']}</span>
    </div>
  )
}

export default Comp2