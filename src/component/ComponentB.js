import React, { useState } from 'react'


const ComponentB = (props) => {
    const [inputval, setinputval] = useState('');
    console.log('B', props);

    const onChange = (e) => {
        setinputval(e.target.value);
        props.handle(e.target.value)


    }
    return (
        <div>
            <input type="text" placeholder='Enter your text here' value={inputval} onChange={onChange} />


        </div>

    );
}

export default ComponentB;