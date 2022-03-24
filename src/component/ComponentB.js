import React, { useState } from 'react'

const ComponentB = () => {
    const [getInput, setGetInput] = useState("");
    const onChange = (e) => {
        setGetInput(e.target.value)


    }
    return (
        <div>
            <input type="text" value={getInput} onChange={onChange}></input>
            <h2>{getInput}</h2>
        </div>

    );
}

export default ComponentB;