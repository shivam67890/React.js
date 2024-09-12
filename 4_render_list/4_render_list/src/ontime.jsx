import React, { useState } from "react";
function ontimes() {
    const [name, setname] = useState("guest");
    const [shipping,shippingchange]=useState("delivery");
    function changeName(event) {

        setname(event.target.value)
    }
    function removeeve() {//for removing guest written on input;
        if (name == "guest") {
            setname(" ");
        }
    }
    function changedelivery(event){
        shippingchange(event.target.value);
    }
    return (
        <div>
            <input type="text" value={name} name="" id="" onClick={removeeve} onChange={changeName} />
            <p value={name}>Name:{name}</p>
            <label htmlFor="">
                <input type="radio" value={"pick up"} onChange={changedelivery}
                checked={shipping=="pick up"}
                />
                pick up
            </label>
            <label htmlFor="">
                <input type="radio" value={"delivery"} onChange={changedelivery}
                checked={shipping=="delivery"}
                />
                delivery
            </label>
            <p>shipping={shipping}</p>
        </div>
    );

}
export default ontimes;