// Code Keypad Component Here
import React from "react";
function Keypad(){
    function handleChange(){
        return console.log('Entering password...')
    }
    return (
        <input type='password' onChange={handleChange}></input>
    )
}
export default Keypad