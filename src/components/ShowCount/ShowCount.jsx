import React from 'react';

import './ShowCount.css'

export const ShowCount = (props) => {
    const [counter, setCounter] = React.useState(0);

    console.log(counter);
    return (
        <div>
            <h3>You clicked {counter} times here</h3>
            <button onClick={() => setCounter(counter + 1)}>{props.sumar}</button>
            <button onClick={() => setCounter(counter - 1)}>{props.restar}</button>
        </div>
    );
};


