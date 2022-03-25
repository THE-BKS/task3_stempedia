import React from 'react'

const ComponentC = (props) => {

    // console.log("data from component C ", props);
    return (
        <div className="componentc text">
            <h1>Component C</h1>
            <h1>Data getted from redux <span className="data">{props.data} </span></h1>
        </div>

    );
}

export default ComponentC;