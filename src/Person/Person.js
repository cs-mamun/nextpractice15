import React from 'react';

import './Person.css'

const person = (props) =>{
    return (
        <div className="Person">
            <h2>Greetings! I am form another component from this application.</h2>

            <h5 onClick={props.click}> Hi, I am {props.name} and {props.age} years old and my hobby is {props.expert}</h5>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
}

export default person;