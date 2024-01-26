import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function Screens() {
    const input = useSelector(state => state.calculator.input);
    const [inputsChange, setinputsChange] = useState(input)
    const inputChange = (event)=>{
      setinputsChange(event.target.value)
    }

    return (
        <div className='rounded-2xl'>
            <input
                className='bg-violet-100 w-full h-24 rounded-t-3xl shadow-lg  text-4xl mb-14 text-right pr-2'
                maxLength={25}
                value={input}
                type="text"
            />
        </div>
    );
}

export default Screens;
