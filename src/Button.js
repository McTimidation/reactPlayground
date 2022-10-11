import React from "react";
import { useState } from 'react';

function Button(props) {
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count+1);
        
    }
    return (
        <>
        <button onClick = {handleClick}>I'm a button!</button>
        <p>{count}</p>
        </>
    )
}

export default Button;