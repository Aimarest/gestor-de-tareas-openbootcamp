import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

const GreetingF = (props) => {
    const [age, setAge]= useState(29);
   const  birthday = () => {
setAge(age + 1)
    }
    return (
       
            <div>
                <h1>
                    ¡¡Hola desde componente funcional {props.name}!!
                </h1>
                <h2>Tu edad es de: {age}</h2>
                <div>
                    <button onClick={birthday}>
                        Cumplir años
                    </button>
                </div>
            </div>
    
    );
};


GreetingF.propTypes = {
    name: PropTypes.string,
};


export default GreetingF;
