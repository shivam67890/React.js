// const [stateVariable, setStateFunction] = useState(initialValue);
/*stateVariable: Holds the current value of the state.
setStateFunction: A function used to update the state.
initialValue: The initial state value when the component first renders.*/
import React,{useState} from 'react';
function Usestates() {
    const [name,change]=useState("Guest");
    const [age,agechange]=useState(0);
const changeName=()=>{
    change("shivam");
    agechange(age+1);
}
const decrease=()=>{
    agechange(age-1);

}
const reset=()=>{
    agechange(0);
    change("Guest")

}
    return (
        <div> <p>Name: {name}</p> 
            <p>Age: {age}</p>
            <button onClick={changeName}>usestate</button>
            <button onClick={decrease}>DecreaseAge</button>
            <button onClick={reset}>Reset</button>
            </div>
    );
}
export default Usestates