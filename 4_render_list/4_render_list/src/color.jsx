import React,{useState} from "react";
function color() {
    const [colorval,colrChange]=useState("#0000");
    function colorfun(event){
        colrChange(event.target.value);
    }
    return (
        <div>
        <h1>color picker</h1>
        <div style={{backgroundColor :colorval}}>
            select a color : {colorval}
        </div>    
        <label htmlFor="">
        <input type="color" name="" id="" value={colorval} onChange={colorfun}/>
        </label>s
        </div>
    );
}
export default color;