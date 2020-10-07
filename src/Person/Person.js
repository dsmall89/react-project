import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {
    const radiumStyle = {
        '@media (mid-width: 500px)' : {
            width : '450px'
        }
    };
    return (
    <div className="Person" style= {radiumStyle}>
    <p onClick={props.click}> I'm a {props.name} and I am {props.age}</p>
    <p> {props.children}</p>
    <input type="text" onChange={props.changed} value= {props.name}/>
    </div>
    )
};

export default Radium(person);