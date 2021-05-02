import React from 'react'

const person = (props) =>{
    return (
        <div>
            <h2>Greetings! I am form the react application</h2>

            <h5> Hi, I am {props.name} and {props.age} years old and my hobby is {props.expert}</h5>
            <p>{props.children}</p>
        </div>
    );
}

export default person;