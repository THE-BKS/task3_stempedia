import React from 'react'
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';


const ComponentA = (props) => {
    console.log('A', props);
    return (
        <div>
            <h1>Component A </h1>
            <ComponentB handle={props.handleInputVal} />
            <ComponentC data={props.data} />

        </div>
    );
}

export default ComponentA;