import React from "react";


const Item = ({id,name,qty}) => {

    return(
     <ul className="list">
        <li>id:{id}</li>
        <li>{name}</li>
        <li>quantity: {qty}</li>
     </ul>

    )
}

export default Item;